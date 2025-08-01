const SUPABASE_URL = "https://qdapojtpjolrhjuutedx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkYXBvanRwam9scmhqdXV0ZWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMTM2MjIsImV4cCI6MjA2OTU4OTYyMn0.AgwEY0EXaWB_FZF7R4J9HLkym47Rvcm9bv15RyUTG20";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


function toggleForms() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}


async function register() {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("❌ Error: " + error.message);
  } else {
    alert("✅ Registro exitoso. Revisa tu correo.");
    toggleForms(); 
  }
}


async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("❌ Error: " + error.message);
  } else {
    alert("✅ Sesión iniciada.");
    localStorage.setItem("token", data.session.access_token);
    
  }
}
