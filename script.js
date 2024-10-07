const productCards = document.getElementsByClassName("product-card");
const totalQuantity = document.getElementById("total-quantity");
const totalPrice = document.getElementById("total-price");
for (let productCard of productCards) {
  const productPrice = productCard.querySelector(".product-price");
  const minusQuantityButton = productCard.querySelector(".minus-quantity-button");
  const addQuantityButton = productCard.querySelector(".add-quantity-button");
  const quantity = productCard.querySelector(".quantity");

  addQuantityButton.onclick = () => {
    quantity.innerText++;
    totalQuantity.innerText++;
    totalPrice.innerText =
      parseInt(totalPrice.innerText) + parseInt(productPrice.innerText);
  };
  minusQuantityButton.onclick =() => {
    if (quantity.innerText > 0) {
      quantity.innerText--;
      totalQuantity.innerText--;
      totalPrice.innerText =
        parseInt(totalPrice.innerText) - parseInt(productPrice.innerText);
    }
  };
}
