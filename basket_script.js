
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

// selectors for rendering
const wrls_container = document.getElementById('basket_container');

// indicator
const basket_indicator = document.getElementById('basket_indicator');

basket_indicator.innerHTML = localStorage.length;

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

window.onload = function(){
    CardRendering(); // cards rendering

    document.onclick = event => { // get event for function
        if(event.target.classList.contains('button_class_selector')){
            addBasket(event.target.id);
        }
        basket_indicator.innerHTML = localStorage.length; // indicator rendering
    }
}

function createCard(object){ // item's cards rendering

    let {id, img, title, price, rate, type} = object;

    let card = document.createElement('div');
    card.classList.add('card');
    basket_container.append(card)

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

    localStorage.forEach(el =>{
        if(JSON.parse(localStorage.getItem(el)).slice(0, 5) == button){
            console.log(JSON.parse(el).slice(0, 5))
        }
    })

for(let i = 0; i < localStorage.length; i++){
    localStorage.getItem()
}

    // headphones.forEach(el =>{ // call rendering headphones(card_container) section
    //     createCard(el);
    // })

}

function getIdNumber(str){ // get id from button name
    return String(str[str.length - 1])
}