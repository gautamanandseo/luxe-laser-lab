import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { imageBase64, concerns } = await req.json();

    if (!imageBase64) {
      return new Response(
        JSON.stringify({ error: "No image provided" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `You are a professional dermatological AI assistant for Empathy Laser Clinic, Delhi's premier aesthetic clinic. 
    
Analyze the provided facial/skin image and provide:
1. **Skin Type Assessment** - Identify the likely skin type (oily, dry, combination, normal, sensitive)
2. **Key Observations** - List 3-5 specific skin observations (e.g., pigmentation, texture, pores, fine lines, dark circles, acne marks)
3. **Concern Score** - Rate overall skin health on a scale of 1-10 (10 being excellent)
4. **Recommended Treatments** - Suggest 3-4 specific treatments from our clinic menu:
   - HydraFacial, Chemical Peels, LED Therapy, Microdermabrasion
   - Laser Hair Removal, ResurFX Skin Resurfacing
   - Botox & Dermal Fillers, HIFU Non-Surgical Facelift
   - PRP Therapy, Skin Lightening, Dark Circles Treatment
   - CoolSculpting, Anti-Ageing Programs
5. **Skincare Tips** - 2-3 general skincare tips

${concerns ? `The user's specific concerns are: ${concerns}` : ""}

Respond in valid JSON format with these exact keys:
{
  "skinType": "string",
  "observations": ["string array"],
  "score": number,
  "recommendedTreatments": [{"name": "string", "reason": "string", "link": "string"}],
  "tips": ["string array"],
  "summary": "A brief 1-2 sentence personalized summary"
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              { type: "text", text: "Please analyze this skin/face image and provide your assessment." },
              { type: "image_url", image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from AI");
    }

    // Extract JSON from the response (handle markdown code blocks)
    let parsed;
    try {
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : content;
      parsed = JSON.parse(jsonStr);
    } catch {
      // If JSON parsing fails, return the raw content
      parsed = { summary: content, skinType: "Unknown", observations: [], score: 0, recommendedTreatments: [], tips: [] };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Skin analysis error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
