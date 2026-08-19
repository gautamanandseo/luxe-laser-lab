CREATE TABLE public.consultation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  preferred_date DATE,
  message TEXT,
  source TEXT,
  page_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.consultation_leads TO service_role;

ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access to leads" ON public.consultation_leads FOR SELECT TO authenticated USING (false);