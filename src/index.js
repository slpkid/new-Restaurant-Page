import { renderHome, contentDiv } from "./home";
import { clearNodes } from "./clearNode";

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

(function init() {
    renderHome()
})();


homeButton.addEventListener('click', () => {
    clearNodes(contentDiv);
    renderHome();
})