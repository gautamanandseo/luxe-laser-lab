import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM = `You are the AI Treatment Concierge for Empathy Laser Clinic, Delhi NCR's premier aesthetic clinic in Pitampura. Based on the user's answers, recommend the best treatments from this curated menu (use only these slugs and titles):

- Laser Hair Removal — /laser-hair-removal-delhi
- CoolSculpting (Fat Freezing) — /coolsculpting-delhi
- Weight Loss & Body Contouring — /weight-loss-clinic-delhi
- Botox & Dermal Fillers — /botox-fillers-delhi
- Skin Clinic (HydraFacial, Peels) — /skin-clinic-delhi
- ResurFX Skin Resurfacing — /resurfx-delhi
- HIFU Non-Surgical Facelift — /hifu-treatment-delhi
- Anti-Ageing Programs — /anti-ageing-delhi
- Acne Treatment — /acne-treatment-delhi
- Skin Lightening — /skin-lightening-delhi
- Dark Circles Treatment — /dark-circles-treatment-delhi
- Skin Tightening — /skin-tightening-delhi
- Microdermabrasion — /microdermabrasion-delhi
- Hair Loss / PRP — /hair-loss-treatment-delhi
- Hair Transplant — /hair-transplant-delhi
- Bridal Packages — /bridal-packages-delhi
- Facials & HydraFacial — /facials-delhi
- Tattoo Removal — /tattoo-removal-delhi
- Mole & Wart Removal — /mole-wart-removal-delhi
- Stretch Marks — /stretch-marks-delhi
- Body Contouring — /body-contouring-delhi

Reply with STRICT JSON only — no markdown fences, no prose:
{
  "summary": "2-sentence personalized note (warm, professional, Delhi context).",
  "recommendations": [
    { "title": "string (exact name from list)", "slug": "/path-delhi", "why": "1-2 line reason tied to user answers", "priority": "Primary" | "Complementary" }
  ],
  "next_step": "One actionable sentence — e.g. 'Book a free consultation at our Pitampura clinic.'"
}
Return 2-4 recommendations. Never invent treatments. Never mention prices.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const { answers } = await req.json();
    if (!answers || typeof answers !== "object") {
      return new Response(JSON.stringify({ error: "Missing answers" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userMsg = `User profile:\n${Object.entries(answers).map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n")}\n\nRecommend the most relevant treatments.`;

    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userMsg },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!r.ok) {
      if (r.status === 429) return new Response(JSON.stringify({ error: "Too many requests. Please try again shortly." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (r.status === 402) return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const t = await r.text();
      console.error("Gateway error", r.status, t);
      throw new Error(`AI gateway error ${r.status}`);
    }

    const data = await r.json();
    const content = data.choices?.[0]?.message?.content ?? "{}";
    let parsed;
    try {
      const m = content.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(m ? m[0] : content);
    } catch {
      parsed = { summary: content, recommendations: [], next_step: "Book a free consultation at our Pitampura clinic." };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("recommender error", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
