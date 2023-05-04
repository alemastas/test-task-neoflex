
// change language buttons
const buttonEng = document.getElementById('eng');
const buttonRus = document.getElementById('rus');

// selectors
const headph_lang = document.getElementById('headph_lang');
const wirelessph = document.getElementById('wirelessph_lang');
const favorite = document.getElementById('favorite');
const basket = document.getElementById('basket');
const contacts = document.getElementById('contacts');
const services = document.getElementById('services');
const basket_shop_button = document.getElementsByClassName('basket_shop_button');

// indicator selector
const basket_indicator = document.getElementById('basket_indicator');
const shop_result = document.getElementById('shop_result');


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

    headph_lang.innerHTML = 'Корзина';
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

function basketIndicatorFunction(){ // show count the array length
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
    basket_indicator.innerHTML = basketIndicatorFunction();
    shop_result.innerHTML = sumItemsIndicator();
}

function getTempBasket(){
    return JSON.parse(sessionStorage.getItem('basketArray'));
}

function setTempBasket(temp_basket){
    sessionStorage.setItem('basketArray', JSON.stringify(temp_basket));
}

function eventAdd(){
    document.onclick = event => { // get event for function
        if(event.target.classList.contains('basket_delete_button')){
            deleteItem(event.target.id);
        }
        else if(event.target.classList.contains('btn_plus')){
            plusItem(event.target.id);
            shop_result.innerHTML = sumItemsIndicator();
        }
        else if(event.target.classList.contains('btn_minus')){
            minusItem(event.target.id);
            shop_result.innerHTML = sumItemsIndicator();
        }
    }
}

function getIdCounter(id, el){ // get personal id for html-item
    const getIdCounter = `id_counter${id}`
    const id_counter = document.getElementById(getIdCounter)
    id_counter.innerHTML = el.counts;
}

function updateSum(id, el){ // update sum in basket shop
    const sumSelector = `sum${id}`;
    const sum = (+el.counts) * (+el.price);
    const sumContainer = document.getElementById(sumSelector);
    sumContainer.innerHTML = sum + ' <span>&#8381</span>';
}

function plusItem(id){
    let temp_basket = getTempBasket();
    temp_basket.forEach(el => {
        if(el.id == id){
            el.counts++;
            getIdCounter(id, el);
            updateSum(id, el);
        }
    })
    setTempBasket(temp_basket);
}

function minusItem(id){
    let temp_basket = getTempBasket();
    temp_basket.forEach(el => {
        if(el.id == id){
            if(el.counts < 1){ 
                return;
            }
            el.counts--;
            getIdCounter(id, el);
            updateSum(id, el);
        }
    })
    setTempBasket(temp_basket);
}

function isBasketExist(){
    if(getTempBasket() == null || getTempBasket() == ''){ // basket in local storage created if basket is empty
        setTempBasket(basketArray);;
    }
}

function createBasketCard(object){ // item's cards rendering

    let {img, title, price, id, counts} = object;

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
        </div>

        <div class="basket_delete_item">
            <input type="image" class="basket_delete_button" data-title="Delete" id="${id}" src="Img/iconcs/Rubish.png"  
            alt="delete item"></img>
        </div>
    </div>

    <div class="basket_card_counter">
        <div class="basket_card_numbers">
            <button class="basket_card_counter_btn btn_minus" id="${id}">-</button>
                <span id="id_counter${id}">${counts}</span>
            <button class="basket_card_counter_btn btn_plus" id="${id}">+</button>
        </div>

        <div class="card_price">
            <p class="regular plus_sized" id="sum${id}">${price * counts} &#8381</p>
        </div>
    </div>
    `
}

function CardRendering(){
    isBasketExist();
    let temp_basket = getTempBasket();
    if(temp_basket.length > 0){
        temp_basket.forEach(el =>{ // call rendering headphones(card_container) section
            createBasketCard(el);
        })
    }
}

function deleteItem(id){
    let temp_basket = getTempBasket();
    temp_basket.forEach( el => {
        if(el.id == id){
            let index = temp_basket.indexOf(el);
            temp_basket.splice(index, 1);
        }
    })
    setTempBasket(temp_basket);
    location.reload();
}

function clearBasket(){
    sessionStorage.clear();
    location.reload();
}

function sumItemsIndicator(){ // draw sum of items in basket
    const temp_basket = getTempBasket();
    let sum = 0;
    if(temp_basket.length > 0){
        temp_basket.forEach(el =>{ 
            sum += (el.counts * el.price);
        })
        return sum;
    } else { return 0 }
}