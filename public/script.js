const container = document.getElementById("container");
const registrationBtn = document.getElementById("register");
const loginBtn = document.getElementById("BackToLogin");

// Check if buttons exist before adding event listeners
if (registrationBtn) {
  registrationBtn.addEventListener("click", () => {
    window.location = "/register";
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location = "/login";
  });
}
