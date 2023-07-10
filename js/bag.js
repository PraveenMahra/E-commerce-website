// const quantityInput = document.querySelectorAll(".quantityInput");
// const minusBtn = document.querySelectorAll(".minus-btn");
// const plusBtn = document.querySelectorAll(".plus-btn");

// for (let i = 0; i < plusBtn.length; i++) {
//   let quantity = parseInt(quantityInput[i].value);
//   minusBtn[i].addEventListener("click", () => {
//     if (quantity > 1) {
//       quantity--;
//       quantityInput[i].value = quantity;
//       updatePrice();
//     }
//   });

//   plusBtn[i].addEventListener("click", () => {
//     quantity++;
//     quantityInput[i].value = quantity;
//     updatePrice();
//   });
// }

// // Cart Item Removal
// const removeButtons = document.querySelectorAll(".order-list-remove-btn");

// removeButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const orderList = e.target.closest(".order-list");
//     orderList.remove();
//     updatePrice();
//   });
// });

// // Back to Shopping Button
// const backShoppingBtn = document.querySelector(".go-back-shopping-btn");

// backShoppingBtn.addEventListener("click", () => {
//   window.location.href = "/collection";
// });

// // Checkout Button
// const checkoutBtn = document.querySelector(".order-summery-btn");

// checkoutBtn.addEventListener("click", () => {
//   // Perform checkout process or navigate to checkout page
//   // Replace the alert with your desired functionality
//   alert("Checkout process initiated!");
// });

// // Update Price
// function updatePrice() {
//   const price = 3.9; // Assuming a static price for demonstration purposes
//   const totalPrice = price * quantity;
//   const orderTotalValue = document.querySelector(".order-total-value");
//   const orderSummeryValue = document.querySelector(".order-summery-value");
//   const priceEl = document.querySelectorAll(".price");
//   const total = parseInt(priceEl);

//   priceEl[i].textContent = `${totalPrice.toFixed(2)}`;
//   orderTotalValue.textContent = `$${total ** priceEl[i]}`;
//   orderSummeryValue.textContent = `$${priceEl[i].textContent}`;
// }

// // Initial price update
// updatePrice();
