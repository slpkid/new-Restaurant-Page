import { renderHome, contentDiv } from "./home";
import { clearNodes } from "./clearNode";
import { renderMenu } from './menu'
import { renderAbout } from "./about";

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

const clearContent = () => {
    clearNodes(contentDiv)
}

(function init() {
    renderHome()
})();



homeButton.addEventListener('click', (e) => {
    clearContent();
    renderHome();
})

menuButton.addEventListener('click', (e) => {
    clearContent();
    renderMenu();
})

aboutButton.addEventListener('click', (e) => {
    clearContent();
    renderAbout();
})