// REGISTER PAGE LOGIC
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password !== confirm) {
      message.style.color = "red";
      message.textContent = "Passwords do not match!";
      return;
    }

    // For now simulate success
    message.style.color = "green";
    message.textContent = "Registration successful! (API later)";

    // Later this is where backend call will go
    console.log({ name, email, password });
  });
}

// LOGIN PAGE LOGIC
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Fake login for frontend testing
    if (email === "test@test.com" && password === "123456") {
      message.style.color = "green";
      message.textContent = "Login successful!";

      localStorage.setItem("loggedIn", true);
      window.location.href = "index.html";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid email or password";
    }
  });
}
