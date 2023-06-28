const productList = document.querySelectorAll(".product-detail-lists");
const plusIconHead = document.querySelectorAll(".product-details-heading");
const minusIcon = document.querySelectorAll(".icon-minus");
const plusIcon = document.querySelectorAll(".product-detail-icon");
const organic = document.querySelector(".organic-heading");
const toggleIcon = document.querySelector(".toggle-on-icon");

const cookieBox = document.querySelector(".cookies");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < plusIconHead.length; i++) {
  plusIconHead[i].addEventListener("click", function () {
    productList[i].classList.toggle("hidden");
    minusIcon[i].classList.toggle("hidden");
    plusIcon[i].classList.toggle("hidden");
  });
}

organic.addEventListener("click", function () {
  toggleIcon.classList.toggle("hidden");
});

const productData = [
  {
    id: 1,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img1.png",
  },
  {
    id: 2,
    name: "Ceylon",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 5.8,
    image: "./assets/img/product-img2.png",
  },
  {
    id: 3,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img3.png",
  },
  {
    id: 4,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img4.png",
  },
  {
    id: 5,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img5.png",
  },
  {
    id: 6,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img6.png",
  },
  {
    id: 7,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img7.png",
  },
  {
    id: 8,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img8.png",
  },
  {
    id: 9,
    name: "Ceylon Ginger",
    lastName: "Cinnamon chai tea",
    currency: "$",
    rate: 4.8,
    image: "./assets/img/product-img9.png",
  },
];

const product = document.querySelector("#rate-list");

for (let i = 0; i < productData.length; i++) {
  product.insertAdjacentHTML(
    "beforeend",
    `<div>
        <a class="product-link" href="/product?product=${productData[i].id}">
            <img src=${productData[i].image} />
            <p class="product-name-rate">${productData[i].name}</p>
            <p class="product-name-rate">${productData[i].lastName}</p>
            <p class="product-name-rate"><span class="rate">${productData[i].currency} ${productData[i].rate} </span>/ 50g</p>
        </a>
    </div>`
  );
}
