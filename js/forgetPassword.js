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
}
