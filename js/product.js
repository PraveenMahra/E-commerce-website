const quantityInput = document.getElementById("quantityInput");
let quantity = parseInt(quantityInput.value);
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const addCart = document.querySelector(".addcart-btn");

minusBtn.addEventListener("click", updateQuantity);
plusBtn.addEventListener("click", updateQuantity);

function updateQuantity() {
  if (this === minusBtn && quantity > 1) {
    quantity--;
  } else if (this === plusBtn) {
    quantity++;
  }

  quantityInput.value = quantity;
  updatePrice();
}

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

// get id from url

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

    updatePrice();
  });
}

function updatePrice() {
  const selectedVariantIndex = Array.from(bagVariants).indexOf(selectedVariant);
  const price = variants[selectedVariantIndex].price;
  const totalPrice = price * quantity;
  priceSpan.textContent = "$" + totalPrice.toFixed(2);
}

// Initial selection and price update
bagVariants[0].classList.add("bag-border");
selectedVariant = bagVariants[0];
updatePrice();

const productData = [
  {
    id: 1,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img1.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 2,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img2.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 3,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img3.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 4,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img4.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 5,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img5.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 6,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img6.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 7,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img7.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 8,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img8.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
  {
    id: 9,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    image: "/assets/img/product-img9.png",
    origin: "India",
    property: "Organic",
    vegan: "Vegan",
  },
];

const productImage = document.querySelector(".product-details");
const productDetails = document.querySelector(".product-description");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the ID value from the 'product' query parameter
const id = urlParams.get("product");
const clickedId = parseInt(id);

for (let i = 0; i < productData.length; i++) {
  if (productData[i].id === clickedId) {
    productImage.insertAdjacentHTML(
      "afterbegin",
      `<div class="product-img">
          <img src="${productData[i].image}" alt="img" />
       </div>`
    );

    productDetails.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="heading product-description-heading">
          ${productData[i].name} ${productData[i].lastName}
       </h2>
        <p class="product-description-para">
          A lovely warming Chai tea with ${productData[i].name} ${productData[i].lastName} flavours.
        </p>
        <div class="product-origin">
          <img src="/assets/img/language.svg" alt="icon" />
          <p>Origin: ${productData[i].origin} </p>

          <img src="/assets/img/redeem.svg" alt="icon" />
          <p>${productData[i].property}</p>

          <img src="/assets/img/eco.svg" alt="icon" />
          <p> ${productData[i].vegan} </p>
        </div>`
    );
  }
}
