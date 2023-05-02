
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

// selectors for rendering
const wrls_container = document.getElementById('wrls_container');
const card_container = document.getElementById('card_container');

// indicator
const basket_indicator = document.getElementById('basket_indicator');

// <----------------------- language handler ----------------------->

// change language init
function changeLanguage(){
    let lang = sessionStorage.getItem('lang');
    if(lang ==! null || lang == undefined){
        sessionStorage.setItem('lang', 'rus');
        onRussian();
    } else if(lang == 'rus'){ 
        onRussian() 
    } else if(lang == 'eng'){ 
        onEnglish() 
    }
}

buttonRus.addEventListener('click', function(){
    onRussian();
});

buttonEng.addEventListener('click', function(){
    onEnglish();
});

function onRussian(){
    sessionStorage.setItem('lang', 'rus');

    headph_lang.innerHTML = 'Наушники';
    wirelessph.innerHTML = 'Беспроводные наушники';
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

    headph_lang.innerHTML = 'Headphones';
    wirelessph.innerHTML = 'Wireless headphones';
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
    (JSON.parse( sessionStorage.getItem('basketArray')) ).map(el => { 
        sumOfCounts += el.counts
    })
    return sumOfCounts;
}

window.onload = function(){
    CardRendering(); // cards rendering
    changeLanguage(); // change language
    eventAdd(); // add event click
    isBasketExist(); // check basket on exist

    basket_indicator.innerHTML = basketIndicatorFunction(); // indicator
}

function eventAdd(){
    document.onclick = event => { // get event for function
        if(event.target.classList.contains('button_class_selector')){
            addBasket(event.target.id);
        }
    }
}

function isBasketExist(){
    if(sessionStorage.getItem('basketArray') == null){ // basket in local storage created if basket is empty
        sessionStorage.setItem('basketArray', JSON.stringify(basketArray));
    }
}

function createCard(object){ // item's cards rendering

    let {id, img, title, price, rate, type} = object;
    let html_element = '';
    type == 'hdph' ? html_element = card_container : html_element = wrls_container;

    let card = document.createElement('div');
    card.classList.add('card');
    html_element.append(card)

    card.innerHTML = `
    <div class="card_img"><img src="${img}" alt="headphones"></img></div>
    <div class="card_line">
        <div class="card_name"><h3>${title}</h3></div>
        <div class="card_price">
            <p class="regular colored plus_sized">${price} &#8381</p>
            <p class="regular colored striked">${price + ((price/100) * 15)} &#8381</p>
        </div>
    </div>
    
    <div class="card_line">
        <div class="card_rate">
            <img src="Img/iconcs/Star.png" alt="star">
            <span class="card_span">${rate}</span>
        </div>
        <div><button class="card_button"><p class="button_class_selector plus_sized" 
        id="buy_button ${id}">Buy</p></button></div>
    </div>`
}

function CardRendering(){
    headphones.forEach(el =>{ // call rendering headphones(card_container) section
        createCard(el);
    })
}

function getIdNumber(str){ // get id from button name
    return String(str[str.length - 1])
}

function addBasket(id){ // add item to local storage)
    let temp_basket = JSON.parse( sessionStorage.getItem('basketArray') ); // get basket
    if(temp_basket.length == 0){
        isNotDublicate(id);
    } else {
        ifDublicate(id);
    }
    basket_indicator.innerHTML = basketIndicatorFunction() // update basket indicator
};

function ifDublicate(id){ 
    let checkStatus = false; // check dublicated item
    let temp_basket = JSON.parse( sessionStorage.getItem('basketArray') ); // get basket
    temp_basket.map(el => { // check on dublicate
        if(el.id == headphones[getIdNumber(id)].id){
            el.counts++;
            checkStatus = true; // find dublicate
            sessionStorage.setItem('basketArray', JSON.stringify(temp_basket)); // set basket
        }
    });

    checkStatus ? checkStatus : isNotDublicate(id);
}

function isNotDublicate(id){
    let temp_basket = JSON.parse( sessionStorage.getItem('basketArray') ); // get basket
    temp_basket.push( headphones[getIdNumber(id)] ); // push item in basket
    sessionStorage.setItem('basketArray', JSON.stringify(temp_basket)) // set basket
}