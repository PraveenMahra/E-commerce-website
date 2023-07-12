const forgetPasswordForm = document.getElementById("forgetPasswordForm");
const emailInput = document.getElementById("email");
const messageElement = document.getElementById("message");

forgetPasswordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  if (email === "") {
    showMessage("Please enter your email.");
  } else {
    showMessage("Password reset email sent to: " + email);
    messageElement.style.color = "#282828";
    forgetPasswordForm.reset();
  }
});

function showMessage(message) {
  messageElement.textContent = message;
  otpForm.classList.remove("hidden");
  forgetPasswordForm.classList.add("hidden");
}

const otpForm = document.getElementById("otpForm");
const resetPasswordForm = document.getElementById("resetPasswordForm");
const otpInput = document.getElementById("otp");
const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const resetPasswordMessage = document.getElementById("resetPasswordMessage");

otpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const otp = otpInput.value;

  // Perform OTP verification here

  otpForm.classList.add("hidden");
  resetPasswordForm.classList.remove("hidden");
});

resetPasswordForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (newPassword !== confirmPassword) {
    resetPasswordMessage.textContent =
      "Passwords do not match. Please try again.";
    resetPasswordMessage.classList.add("error");
    return;
  }

  // Perform the password reset operation here

  newPasswordInput.value = "";
  confirmPasswordInput.value = "";

  resetPasswordMessage.textContent = "Password reset successful!";
  resetPasswordMessage.classList.remove("error");
  window.location.href = "/account.html";
});
