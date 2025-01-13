import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nwnrdldsrbgcibtkjuyf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bnJkbGRzcmJnY2lidGtqdXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NzIwMDAsImV4cCI6MjAxOTQ0ODAwMH0.qKtfNHhL6AKqGsmDfjGhZrwQR8bR65W_ZCxT9YqPFTg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add console log to help with debugging
console.log('Supabase client initialized with URL:', supabaseUrl);