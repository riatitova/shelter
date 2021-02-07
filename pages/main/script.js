const { SourceCode } = require("eslint");

const burger = document.querySelector('.burger');
const menu = document.querySelector('.burger__menu');
let hidden = true;
burger.addEventListener('click', showMenu);
burger.on('click', (e) => {
    e.preventDefault();
    showMenu();
  });

function showMenu() {
    if (hidden) {
        menu.classList.add('burger__menu_active');
        hidden = false;
    } else {
        menu.classList.remove('burger__menu_active');
        hidden = true;
    }
}