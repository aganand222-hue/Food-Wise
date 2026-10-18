// FoodWise database connection (Supabase).
// The URL and the anon/publishable key are SAFE to be public: they are meant to be used in a browser,
// and what visitors can do is limited by the Row Level Security policies in supabase-schema.sql.
// NEVER put a "secret" or "service_role" key in this file.

const SUPABASE_URL_RAW = "https://kdqcsiyuoxcnfvgvujwq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcWNzaXl1b3hjbmZ2Z3Z1andxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3NDA4ODUsImV4cCI6MjEwNzMxNjg4NX0.Qh7-5ub6u22-C_CNafBYKA6rnsNlbXKcywhscdf_QrM";

// Tidy the URL: drop a trailing "/rest/v1/" or "/" if it was pasted that way.
const SUPABASE_URL = SUPABASE_URL_RAW.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");

function supabaseKeyIsSecret(key) {
    if (key.indexOf("sb_secret_") === 0) return true;
    try {
        const body = key.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(atob(body)).role === "service_role";
    } catch (e) {
        return false;
    }
}

let SUPABASE_CONFIG_MESSAGE = "";
if (SUPABASE_URL.indexOf("PASTE_YOUR") === 0 || SUPABASE_ANON_KEY.indexOf("PASTE_YOUR") === 0) {
    SUPABASE_CONFIG_MESSAGE = "Supabase isn't set up yet. Open js/supabase-config.js and paste in your project URL and anon (publishable) key.";
} else if (supabaseKeyIsSecret(SUPABASE_ANON_KEY)) {
    SUPABASE_CONFIG_MESSAGE = "js/supabase-config.js contains a SECRET key. Replace it with the anon (publishable) key, and delete the secret key in Supabase.";
}
const SUPABASE_NOT_CONFIGURED = SUPABASE_CONFIG_MESSAGE !== "";

// Used by feedback.html and results.html (they load the Supabase library first).
const supabaseClient = SUPABASE_NOT_CONFIGURED ? null : supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
