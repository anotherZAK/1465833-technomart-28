var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
    }
  }
});

var lostButton = document.querySelector(".lost-button");
var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".write-us-close");
var writeUsForm = writeUsPopup.querySelector(".write-us-form");
var userName = writeUsPopup.querySelector(".input-name");
var userEmail = writeUsPopup.querySelector(".input-e-mail");
var userMessage = writeUsPopup.querySelector(".input-textarea");

var isStorageSupport = true;
var storageName, storageEmail = "";


try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

lostButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-write-us-show");
  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  }
  if (storageEmail) {
    userEmail.value = storageEmail;
    userMessage.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-write-us-show");
  writeUsPopup.classList.remove("modal-error");
});
console.log(!userName.value);
console.log(!userMessage.value);

writeUsForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-write-us-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-write-us-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});
