import { create } from "lodash";
import { createElement, returnElementByID } from "./createElement";
import { clearNodes } from "./clearNode";

const contentDiv = document.getElementById('content')

let profit = 0

function renderAbout() {
    createElement('h1','Crummy\'s Burgers',contentDiv,['title'])

    createElement('div','',contentDiv,['field'],'story')
    createElement('div','Our Story',returnElementByID('story'),['bold','underline'])
    createElement('div','Crummy\'s has been a neighborhood classic variety confectioner for over eighteen months. We started our journey with only two employees living and confectioning in a historic New York brownstone apartment. After six months of hard work, we were ready to crack open the oak barrels and get our feet wet in the world of confectioner distribution. To the date Crummy\'s has netted a sum of',returnElementByID('story'),'','profit')
    createElement('div','Note: thanks to our programmers, you can now see our profits in real time!',returnElementByID('story'),['description','red'])
    
    createElement('span',` -$${profit}`,returnElementByID('profit'),['red'],'profitAmount')
}

function loseMoney() {
    profit += Math.floor(Math.random() * 50000);
    // console.log(profit);
    const profitText = document.getElementById('profitAmount')
    if(profitText) {
        profitText.textContent = ` -$${profit}`
    }
    // if (profitText) {
    //     profitText.innerText(`-$${profit}`)
    // }
    setTimeout(loseMoney, Math.floor(Math.random() * 2000));
}

loseMoney();

export { renderAbout }