const toogleBtn = document.getElementById("click");
const button = document.querySelector(".button");
const menuButton = document.querySelector(".menu");

var clicked = false;
toogleBtn.addEventListener("click", openMenu);
menuButton.addEventListener("click", openMenu);

function openMenu() {
  if (!clicked) {
    menuButton.classList.add("menu-opened");
    button.classList.add("clicked");
    clicked = true;
  } else {
    menuButton.classList.remove("menu-opened");
    button.classList.remove("clicked");
    clicked = false;
  }
}
