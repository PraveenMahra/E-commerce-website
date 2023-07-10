const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("form-sign-in");
const rememberMe = document.getElementById("remember-me");

const USER = {
  name: "Ram",
  email: "ram@gmail.com",
  password: "1aA!1111",
};

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  const passwordpattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordpattern.test(password);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const shouldRemember = rememberMe.checked;

  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (!validatePassword(password)) {
    alert("Please enter a valid password");
    return;
  }

  if (email !== USER.email || password !== USER.password) {
    alert("Invalid email or password");
    return;
  }

  if (shouldRemember) {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", JSON.stringify(USER));
  } else {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("user", JSON.stringify(USER));
  }
});
