var mapLink=document.querySelector(".contacts-button-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".map-close");mapLink.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("modal-map-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("modal-map-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("modal-map-show")&&(a.preventDefault(),mapPopup.classList.remove("modal-map-show"))});var storageName,lostButton=document.querySelector(".lost-button"),writeUsPopup=document.querySelector(".modal-write-us"),writeUsClose=writeUsPopup.querySelector(".write-us-close"),writeUsForm=writeUsPopup.querySelector(".write-us-form"),userName=writeUsPopup.querySelector(".input-name"),userEmail=writeUsPopup.querySelector(".input-e-mail"),userMessage=writeUsPopup.querySelector(".input-textarea"),isStorageSupport=!0,storageEmail="";try{storageName=localStorage.getItem("userName"),storageEmail=localStorage.getItem("userEmail")}catch(a){isStorageSupport=!1}lostButton.addEventListener("click",function(a){a.preventDefault(),writeUsPopup.classList.add("modal-write-us-show"),storageName&&(userName.value=storageName,userEmail.focus()),storageEmail&&(userEmail.value=storageEmail,userMessage.focus())}),writeUsClose.addEventListener("click",function(a){a.preventDefault(),writeUsPopup.classList.remove("modal-write-us-show"),writeUsPopup.classList.remove("modal-error")}),console.log(!userName.value),console.log(!userMessage.value),writeUsForm.addEventListener("submit",function(a){userName.value&&userEmail.value&&userMessage.value?isStorageSupport&&(localStorage.setItem("userName",userName.value),localStorage.setItem("userEmail",userEmail.value)):(a.preventDefault(),writeUsPopup.classList.remove("modal-error"),writeUsPopup.offsetWidth=writeUsPopup.offsetWidth,writeUsPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&writeUsPopup.classList.contains("modal-write-us-show")&&(a.preventDefault(),writeUsPopup.classList.remove("modal-write-us-show"),writeUsPopup.classList.remove("modal-error"))});