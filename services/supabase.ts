import { createClient } from "@supabase/supabase-js";

const supabase_url = "https://gsweilknvmlrernyysdf.supabase.co";
const api_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdzd2VpbGtudm1scmVybnl5c2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3Nzg3NDgsImV4cCI6MjAwMTM1NDc0OH0.FFggqz8qLVlStQTh886lpe5I29d_2F9dMmebwCx8l8M";

const supabase = createClient(supabase_url, api_key);

export default supabase;
