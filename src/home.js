import { createElement, returnElementByID } from "./createElement";

const contentDiv = document.getElementById('content')

function renderHome() {
    createElement('h1','Crummy\'s Burgers',contentDiv,['title'])

    createElement('div','',contentDiv,['welcome','field'],'welcome')
    createElement('div','Welcome to Crummy\'s Burgers.',returnElementByID('welcome'),['underline','bold']);
    createElement('div',' We are a team of confectioners with over 1 year of combined experience with a focus on gummy candies. Currently we have exactly one product: the titular Crummy\'s Burger gummy candy. We only sell in bulk, minimum order of 1000 kilograms per shipment.',returnElementByID('welcome'))

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