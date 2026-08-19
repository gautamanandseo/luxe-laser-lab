export interface LeadPayload {
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  service?: string;
  date?: string;
  message?: string;
  source?: string;
}

const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID || "qwyywhdadnbacvwrupbl";
const ANON_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3eXl3aGRhZG5iYWN2d3J1cGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODkwOTQsImV4cCI6MjA4ODU2NTA5NH0.njgz7S7KsJyAN-GzKtUtQfShlBnbWBrocyyb2etS73I";

export async function submitLead(payload: LeadPayload): Promise<void> {
  const res = await fetch(`https://${PROJECT_ID}.supabase.co/functions/v1/submit-lead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ANON_KEY}`,
      apikey: ANON_KEY,
    },
    body: JSON.stringify({
      ...payload,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    }),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }
}
