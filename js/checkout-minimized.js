var basket=document.querySelector(".modal-basket"),basketClose=basket.querySelector(".basket-close"),basketContinue=basket.querySelector(".button-continue-buy"),addToBasketAll=document.querySelectorAll(".add-to-basket"),addToBookmarksAll=document.querySelectorAll(".add-to-bookmarks"),goodsNumber=document.querySelector(".basket-number-change"),bookmarksNumber=document.querySelector(".bookmarks-number-change"),menuBookmarks=document.querySelector(".order-menu__bookmarks"),menuGoods=document.querySelector(".order-menu__basket");for(var addToBasket of addToBasketAll)addToBasket.addEventListener("click",function(a){a.preventDefault(),basket.classList.add("modal-basket-show"),goodsNumber.textContent++,menuGoods.classList.add("order-menu__not-empty")});for(var addToBookmarks of addToBookmarksAll)addToBookmarks.addEventListener("click",function(a){a.preventDefault(),bookmarksNumber.textContent++,menuBookmarks.classList.add("order-menu__not-empty")});basketContinue.addEventListener("click",function(a){a.preventDefault(),basket.classList.remove("modal-basket-show")}),basketClose.addEventListener("click",function(a){a.preventDefault(),basket.classList.remove("modal-basket-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&basket.classList.contains("modal-basket-show")&&(a.preventDefault(),basket.classList.remove("modal-basket-show"))});