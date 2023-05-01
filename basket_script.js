
// <----------------------- language handler ----------------------->

// change language buttons
const buttonEng = document.getElementById('eng');
const buttonRus = document.getElementById('rus');

// selectors
const headph_lang = document.getElementById('headph_lang');
const wirelessph = document.getElementById('wirelessph_lang');
const buy_button = document.querySelectorAll('#buy_button');
const favorite = document.getElementById('favorite');
const basket = document.getElementById('basket');
const contacts = document.getElementById('contacts');
const services = document.getElementById('services');

// indicator selector
const basket_indicator = document.getElementById('basket_indicator');
const shop_result = document.getElementById('shop_result');

// change language functions
let lang = sessionStorage.getItem('lang');
if(lang ==! null || lang == undefined){
    sessionStorage.setItem('lang', 'rus');
    onRussian();
} else if(lang == 'rus'){ onRussian() }
else if(lang == 'eng'){ onEnglish() }

buttonRus.addEventListener('click', function(){
    onRussian();
});

buttonEng.addEventListener('click', function(){
    onEnglish();
});

function onRussian(){
    sessionStorage.setItem('lang', 'rus');

    headph_lang.innerHTML = 'Корзина';
    buy_button.innerHTML = 'Купить';
    favorite.innerHTML = 'Избранное';
    basket.innerHTML = 'Корзина';
    contacts.innerHTML = 'Контакты';
    services.innerHTML = 'Условия сервиса';

    // colorize buttons
    buttonEng.classList.remove('colored');
    buttonRus.classList.add('colored');
}

function onEnglish(){
    sessionStorage.setItem('lang', 'eng');

    headph_lang.innerHTML = 'Basket';
    buy_button.innerHTML = 'Buy';
    favorite.innerHTML = 'Favorite';
    basket.innerHTML = 'Basket';
    contacts.innerHTML = 'Contacts';
    services.innerHTML = 'Terms of service';

    // colorize buttons
    buttonRus.classList.remove('colored');
    buttonEng.classList.add('colored');
}

// <----------------------- logic ----------------------->

const basketArray = []; // work array for save basket items

function basketIndicatorFunction(){ // count the array length
    let sumOfCounts = 0;
    (JSON.parse( localStorage.getItem('basketArray')) ).map(el => { 
        sumOfCounts += el.counts
    })
    return sumOfCounts;
}

window.onload = function(){
    CardRendering(); // cards rendering

    document.onclick = event => { // get event for function
        if(event.target.classList.contains('button_class_selector')){
            addBasket(event.target.id);
        }
    }

    if(localStorage.getItem('basketArray') == null){ // basket in local storage created if basket is empty
        localStorage.setItem('basketArray', JSON.stringify(basketArray));
    }

    basket_indicator.innerHTML = basketIndicatorFunction();
}

function createCard(object){ // item's cards rendering

    let {img, title, price} = object;

    let card = document.createElement('div');
    card.classList.add('basket_card');
    card_container.append(card)

    card.innerHTML = `
    <div class="basket_card_line">

        <div class="basket_card_img_holder">
            <img class="basket_card_img" src="${img}" alt="headphones"></img>
        </div>

        <div class="basket_card_naming">
            <div class="card_name"><h3>${title}</h3></div>
            <div class="card_price">
            <p class="regular plus_sized">${price} &#8381</p>
        </div>

        <div class="basket_delete_item">
            <img class="basket_delete_button" src="Img/iconcs/Rubish.png"  alt="delete item"></img>
        </div>

    </div>`
}



function CardRendering(){
    let temp_basket = JSON.parse( localStorage.getItem('basketArray') ); // get basket
    temp_basket.forEach(el =>{ // call rendering headphones(card_container) section
        createCard(el);
    })
}

function getIdNumber(str){ // get id from button name
    return String(str[str.length - 1])
}