const headphones = [
    {
        img: 'Img/headphones/Image1.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image2.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image3.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image1.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image2.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image3.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    }

];

const wirelessHeadphones = [
    {
        img: 'Img/headphones/Image4.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image5.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    },
    {
        img: 'Img/headphones/Image6.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7
    }
]

const wrls_container = document.getElementById('wrls_container');
const card_container = document.getElementById('card_container');

function createCard(object, html_element){

    let {img, title, price, rate} = object;

    let card = document.createElement('div');
    card.classList.add('card');
    html_element.append(card)

    card.innerHTML = `
    <div class="card_img"><img src="${img}" alt="headphones"></img></div>
    <div class="card_line">
        <div class="card_name"><h3>${title}</h3></div>
        <div class="card_price">
            <p class="regular colored">${price} &#8381</p>
            <p class="regular colored striked">2927 &#8381</p>
        </div>
    </div>
    
    <div class="card_line">
        <div class="card_rate">
            <img src="Img/iconcs/Star.png" alt="star">
            <span class="card_span">${rate}</span>
        </div>
        <div><button class="card_button"><p id="buy_button">Buy</p></button></div>
    </div>`

}

headphones.forEach(el =>{
    createCard(el, card_container);
})

wirelessHeadphones.forEach(el =>{
    createCard(el, wrls_container);
})
