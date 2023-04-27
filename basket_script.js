
var eng = true;

window.onload = function(){

    const buttonEng = document.getElementById('eng');
    const buttonRus = document.getElementById('rus');

    const wirelessph = document.getElementById('wirelessph_lang');
    const buy_button = document.getElementById('buy_button');
    const favorite = document.getElementById('favorite');
    const basket = document.getElementById('basket');
    const contacts = document.getElementById('contacts');
    const services = document.getElementById('services');

    buttonRus.addEventListener('click', function(){
        buy_button.innerHTML = 'Купить';
        favorite.innerHTML = 'Избранное';
        basket.innerHTML = 'Корзина';
        contacts.innerHTML = 'Контакты';
        services.innerHTML = 'Условия сервиса';
    });

    buttonEng.addEventListener('click', function(){
        buy_button.innerHTML = 'Buy';
        favorite.innerHTML = 'Favorite';
        basket.innerHTML = 'Basket';
        contacts.innerHTML = 'Contacts';
        services.innerHTML = 'Terms of service';
    });
}

