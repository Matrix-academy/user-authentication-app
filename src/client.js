import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://htjzdwmwafanwtjlemwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0anpkd213YWZhbnd0amxlbXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NjIzMjYsImV4cCI6MjAzODUzODMyNn0.0cWkAft4CXmWVZId58uoW7eWijCfPIYHy9Pps-LC8k8";
export const supabase = createClient(supabaseUrl, supabaseKey);
