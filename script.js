
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
// const button_class_selector = document.getElementsByClassName('button_class_selector')

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

let lang = '';

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
    // button_class_selector.innerHTML = 'Купить';
    favorite.innerHTML = 'Избранное';
    basket.innerHTML = 'Корзина';
    contacts.innerHTML = 'Контакты';
    services.innerHTML = 'Условия сервиса';

    // colorize buttons
    buttonEng.classList.remove('colored');
    buttonRus.classList.add('colored');

    card_container.innerHTML = '';
    wrls_container.innerHTML = '';
    CardRendering(); // redraw cards
}

function onEnglish(){
    sessionStorage.setItem('lang', 'eng');

    headph_lang.innerHTML = 'Headphones';
    wirelessph.innerHTML = 'Wireless headphones';
    favorite.innerHTML = 'Favorite';
    basket.innerHTML = 'Basket';
    contacts.innerHTML = 'Contacts';
    services.innerHTML = 'Terms of service';

    // colorize buttons
    buttonRus.classList.remove('colored');
    buttonEng.classList.add('colored');
    
    card_container.innerHTML = '';
    wrls_container.innerHTML = '';
    CardRendering(); //redraw cards
}


// <----------------------- logic ----------------------->

const basketArray = []; // work sample

function basketIndicatorFunction(){ // show sum of basketArray items in sessionStorage
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

function getTempBasket(){
    return JSON.parse(sessionStorage.getItem('basketArray'));
}

function setTempBasket(temp_basket){
    sessionStorage.setItem('basketArray', JSON.stringify(temp_basket));
}

function eventAdd(){
    document.onclick = event => { // get event for function
        if(event.target.classList.contains('button_class_selector')){
            addBasket(event.target.id);
        }
    }
}

function isBasketExist(){ // basket in local storage created if basket is empty
    if(getTempBasket() == null){ 
        setTempBasket(basketArray);
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
        <button class="card_button"><span class="button_class_selector plus_sized" 
        id="${id}">${sessionStorage.getItem('lang') == 'rus' ? 'Купить' : 'Buy'}</span></button>
    </div>`
}

function CardRendering(){
    headphones.forEach(el =>{ // call rendering headphones(card_container) section
        createCard(el);
    })
}

function addBasket(id){ // add item to local storage)
    let temp_basket = getTempBasket();
    if(temp_basket.length == 0){
        isNotDublicate(id);
    } else {
        ifDublicate(id);
    }
    basket_indicator.innerHTML = basketIndicatorFunction() // update basket indicator
};

function ifDublicate(id){ // if sessionStorage includes added item
    let checkStatus = false;
    let temp_basket = getTempBasket();
    temp_basket.map(el => { // check on dublicate
        if(el.id == id){
            el.counts++;
            checkStatus = true; 
            setTempBasket(temp_basket); 
        }
    });
    // if item not dublicated, calling isNotDublicate
    checkStatus ? checkStatus : isNotDublicate(id); 
}

function isNotDublicate(id){ // use if sessionStorage not includes added item
    let temp_basket = getTempBasket();
    temp_basket.push( headphones[id] );
    setTempBasket(temp_basket);
}