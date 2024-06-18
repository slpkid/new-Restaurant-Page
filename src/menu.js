import { createElement, returnElementByID } from "./createElement";

const contentDiv = document.getElementById('content')

function renderMenu() {
    createElement('h1','Crummy\'s Burgers',contentDiv,['title'])
    
    createElement('div','',contentDiv,['hours', 'field'],'products');
    createElement('div','Products',returnElementByID('products'),['bold','underline']);
    createElement('div','Crummy\'s Gummy Burgers',returnElementByID('products'));
    createElement('div','The classic gummy you\'ve fallen in love with. Aged to perfection in twelve oak barrels.',returnElementByID('products'),['description','red']);
    createElement('div','Experimental Chocolate Concoction',returnElementByID('products'))
    createElement('div','We really aren\'t sure what this is. Our testing has demonstrated a 89% mortality rate within 48 hours of consumption.',returnElementByID('products'),['description','red'])

}

export { renderMenu }