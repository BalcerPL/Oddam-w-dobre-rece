const supabaseProjectPassword = 'ny)Ke9-EmbuUcpH';

import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://evhgankmaswixqigkpxb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2aGdhbmttYXN3aXhxaWdrcHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMjY4MzMsImV4cCI6MjAyOTYwMjgzM30.KF261nobRSjzmruiNuHhjInZdLvkNd2KIM0McMvz1-8';

const supabase = createClient(supabaseURL, supabaseAnonKey);

export default supabase;

        