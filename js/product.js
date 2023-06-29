const quantityInput = document.getElementById("quantityInput");
let quantity = parseInt(quantityInput.value);
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const addCart = document.querySelector(".addcart-btn");

minusBtn.addEventListener("click", function () {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});

plusBtn.addEventListener("click", function () {
  quantity++;
  quantityInput.value = quantity;
});

addCart.addEventListener("click", function () {
  const quantity = parseInt(quantityInput.value);
  alert("Added " + quantity + " product(s) to the cart.");
});

const variants = [
  { name: "bag 50g", price: 3.9 },
  { name: "bag 100g", price: 6 },
  { name: "bag 170g", price: 9 },
  { name: "bag 250 g", price: 12.5 },
  { name: "bag 1kg", price: 25.5 },
  { name: "bag sample", price: 1 },
];

const bagVariants = document.querySelectorAll(".bag-variants");
const priceSpan = document.querySelector(".product-rate");
let selectedVariant = null;

for (let i = 0; i < bagVariants.length; i++) {
  bagVariants[i].addEventListener("click", function () {
    if (selectedVariant) {
      selectedVariant.classList.remove("bag-border");

      const price = variants[i].price;
      priceSpan.textContent = "$" + price;
    }

    bagVariants[i].classList.add("bag-border");
    selectedVariant = bagVariants[i];
  });
}

const productData = [
  {
    id: 1,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img1.png",
    variants: [
      { name: "bag 50g", price: 3.9 },
      { name: "bag 100g", price: 6 },
      { name: "bag 170g", price: 9 },
      { name: "bag 250 g", price: 12.5 },
      { name: "bag 1kg", price: 25.5 },
      { name: "bag sample", price: 1 },
    ],
  },
];
