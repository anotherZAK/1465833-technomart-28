var basket = document.querySelector(".modal-basket");
var basketClose = basket.querySelector(".basket-close");
var basketContinue = basket.querySelector(".button-continue-buy");
var addToBasketAll = document.querySelectorAll(".add-to-basket");
var addToBookmarksAll = document.querySelectorAll(".add-to-bookmarks");
var goodsNumber = document.querySelector(".basket-number-change");
var bookmarksNumber = document.querySelector(".bookmarks-number-change");

var menuBookmarks = document.querySelector(".order-menu__bookmarks");
var menuGoods = document.querySelector(".order-menu__basket");

for (var addToBasket of addToBasketAll) {
  addToBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.add("modal-basket-show");
    goodsNumber.textContent++;
    menuGoods.classList.add("order-menu__not-empty");
  });
}

for (var addToBookmarks of addToBookmarksAll) {
  addToBookmarks.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmarksNumber.textContent++;
    menuBookmarks.classList.add("order-menu__not-empty");
  });
}

basketContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.remove("modal-basket-show");
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basket.classList.contains("modal-basket-show")) {
      evt.preventDefault();
      basket.classList.remove("modal-basket-show");
    }
  }
});
