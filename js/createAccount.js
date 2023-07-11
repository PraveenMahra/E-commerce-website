const createAccountForm = document.getElementById("createAccountForm");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  const passwordpattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordpattern.test(password);
}

createAccountForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Perform validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (!validatePassword(password)) {
    alert("Please enter a valid password");
    alert(
      "password should be contain one uppercase, one lowercase, one numeral and one special character."
    );
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and confirm password do not match");
    return;
  }

  const accountData = {
    name: name,
    email: email,
    password: password,
  };

  alert("Account created successfully");
  window.location.href = "/account.html";
});
