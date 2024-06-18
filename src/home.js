import { createElement, returnElementByID } from "./createElement";

const contentDiv = document.getElementById('content')

function renderHome() {
    createElement('h1','Crummy\'s Burgers',contentDiv,['title'])

    createElement('div','',contentDiv,['welcome','field'],'welcome')
    createElement('div','Welcome to Crummy\'s Burgers.',returnElementByID('welcome'),['underline','bold']);
    createElement('div',' We are a team of confectioners with over 1 year of combined experience with a focus on gummy candies. Currently we have exactly one product: the titular Crummy\'s Burger gummy candy. We only sell in bulk, minimum order of 1000 kilograms per shipment.',returnElementByID('welcome'))

    createElement('div','',contentDiv,['field'],'story')
    createElement('div','Our Story',returnElementByID('story'),['bold','underline'])
    createElement('div','Crummy\'s has been a neighborhood classic variety confectioner for over eighteen months. We started our journey with only two employees living and confectioning in a historic New York brownstone apartment. After six months of hard work, we were ready to crack open the oak barrels and get our feet wet in the world of confectioner distribution. To the date Crummy\'s has netted a sum of -$37,900.89',returnElementByID('story'),'','profit')
    createElement('div','Note: thanks to our programmers, you can now see our profits in real time!',returnElementByID('story'),['description','red'])

    createElement('div','',contentDiv,['hours', 'field'],'products');
    createElement('div','Products',returnElementByID('products'),['bold','underline']);
    createElement('div','Crummy\'s Gummy Burgers',returnElementByID('products'));
    createElement('div','The classic gummy you\'ve fallen in love with. Aged to perfection in twelve oak barrels.',returnElementByID('products'),['description','red']);
    createElement('div','Experimental Chocolate Concoction',returnElementByID('products'))
    createElement('div','We really aren\'t sure what this is. Our testing has demonstrated a 89% mortality rate within 48 hours of consumption.',returnElementByID('products'),['description','red'])

    createElement('div','',contentDiv,['field', 'hours'],'hours')
    createElement('div','Hours of Operation',returnElementByID('hours'),['bold','underline'])
    createElement('li','Monday - Friday: 10 AM to 6 PM',returnElementByID('hours'))
    createElement('li','Saturday: 8 AM to 4 PM',returnElementByID('hours'))
    createElement('li','Sunday: Closed',returnElementByID('hours'))

    createElement('div','',contentDiv,['field','location'],'address')
    createElement('div','Address',returnElementByID('address'),['bold','underline'])
    createElement('div','8363 Hungry Caterpillar Avenue, Queens, New York 10029',returnElementByID('address'))
}

export { renderHome, contentDiv }