var nav = document.querySelector('nav');
var headerMenu = document.querySelectorAll("nav a");
var bookstoreList = document.querySelectorAll(".list-item");
var bookstoreControl = document.querySelectorAll(".control-item a");
var toggleMenu = document.querySelector('.menu-toggle');

var modalBox = document.querySelector(".modal-box");
var modalContent = document.querySelector(".modal-content");
var closeModal = document.querySelector(".close-modal");
var html = document.querySelector("html");

headerMenu[0].classList.add("active");
bookstoreControl[0].classList.add("active");

// activeElement()
function activeElement(controls, e) {
  e.preventDefault();

  for (var a of controls) {
    a.classList.remove("active");
  }

  e.target.classList.add("active");
}

// removeActive()
function removeActive() {
  html.classList.remove("overflow-hidden");
  modalBox.classList.remove("display-block");
  closeModal.classList.remove("display-block");
}

// hamburger toggle
toggleMenu.addEventListener('click', function(){
  var toggleBar = this.children;

  for(var bar of toggleBar) {
    bar.classList.toggle('active');
  }

  nav.classList.toggle('active');
  html.classList.toggle("overflow-hidden");
})

headerMenu.forEach(function (menu) {
  menu.addEventListener("click", function (e) {
    activeElement(headerMenu, e);
  });
});

bookstoreControl.forEach(function (control) {
  control.addEventListener("click", function (e) {
    activeElement(bookstoreControl, e);
  });
});

bookstoreList.forEach(function (list) {
  list.addEventListener("click", function (e) {
    var listContent = list.innerHTML;

    html.classList.add("overflow-hidden");
    modalBox.classList.add("display-block");
    closeModal.classList.add("display-block");

    modalContent.innerHTML = listContent;

    modalBox.addEventListener("click", function () {
      removeActive();
    });

    closeModal.addEventListener("click", function () {
      removeActive();
    });

    modalContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});