
var eng = true;

window.onload = function(){

    localStorage.setItem(lang, 'en');

    const buttonEng = document.getElementById('eng');
    const buttonRus = document.getElementById('rus');

    const headph_lang = document.getElementById('headph_lang');
    const wirelessph = document.getElementById('wirelessph_lang');
    const buy_button = document.getElementById('buy_button');
    const favorite = document.getElementById('favorite');
    const basket = document.getElementById('basket');
    const contacts = document.getElementById('contacts');
    const services = document.getElementById('services');

    buttonRus.addEventListener('click', function(){
        headph_lang.innerHTML = 'Наушники';
        wirelessph.innerHTML = 'Беспроводные наушники';
        buy_button.innerHTML = 'Купить';
        favorite.innerHTML = 'Избранное';
        basket.innerHTML = 'Корзина';
        contacts.innerHTML = 'Контакты';
        services.innerHTML = 'Условия сервиса';
    });

    buttonEng.addEventListener('click', function(){
        headph_lang.innerHTML = 'Headphones';
        wirelessph.innerHTML = 'Wireless headphones';
        buy_button.innerHTML = 'Buy';
        favorite.innerHTML = 'Favorite';
        basket.innerHTML = 'Basket';
        contacts.innerHTML = 'Contacts';
        services.innerHTML = 'Terms of service';
    });
}

