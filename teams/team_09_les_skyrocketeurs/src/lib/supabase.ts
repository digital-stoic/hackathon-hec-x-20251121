import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are not set
let supabase: any;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Please enable Lovable Cloud.');
  // Export a dummy client to prevent errors
  supabase = {
    auth: {
      signUp: async () => ({ error: { message: 'Please enable Lovable Cloud first' } }),
      signInWithPassword: async () => ({ error: { message: 'Please enable Lovable Cloud first' } }),
      signOut: async () => {},
      getSession: async () => ({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
