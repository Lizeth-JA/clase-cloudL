const SUPABASE_URL = "https://qdapojtpjolrhjuutedx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkYXBvanRwam9scmhqdXV0ZWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMTM2MjIsImV4cCI6MjA2OTU4OTYyMn0.AgwEY0EXaWB_FZF7R4J9HLkym47Rvcm9bv15RyUTG20";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function register() {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Error al registrarse: " + error.message);
  } else {
    alert("Registro exitoso. Verifica tu correo.");
    console.log(data);
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
    alert("Error al iniciar sesión: " + error.message);
  } else {
    alert("¡Bienvenida! Ya estás dentro.");
    console.log(data);
    
    localStorage.setItem("token", data.session.access_token);
  }
}
