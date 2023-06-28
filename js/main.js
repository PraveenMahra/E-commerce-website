const excuteCode = () => {
  if (document.cookie.includes("ecommerce")) return;
  cookieBox.classList.remove("hidden");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.add("hidden");

      if (button.id == "acceptBtn") {
        document.cookie = "cookieBy = ecommerce; max-age =" + 60 * 60 * 60 * 30;
      }
    });
  });
};

window.addEventListener("load", excuteCode);
