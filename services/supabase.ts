import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const api_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabase_url) throw new Error("supabase_url not provided in env");
if (!api_key) throw new Error("api_key not provided in env");

const supabase = createClient(supabase_url, api_key);

export default supabase;
