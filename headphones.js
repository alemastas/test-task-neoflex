// shop items headphones
// hdph - wired headphones
// wrls - wireless headphones
const headphones = [
    {
        img: 'Img/headphones/Image1.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7,
        type: 'hdph',
    },
    {
        img: 'Img/headphones/Image2.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'Img/headphones/Image3.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'Img/headphones/Image1.png',
        title: 'Apple BYZ S8521', 
        price: 2927,
        rate: 4.7,
        type: 'hdph',
    },
    {
        img: 'Img/headphones/Image2.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'Img/headphones/Image3.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'Img/headphones/Image4.png',
        title: 'Apple AirPods', 
        price: 9527,
        rate: 4.7,
        type: 'wrls',
    },
    {
        img: 'Img/headphones/Image5.png',
        title: 'GERLAX HG-04', 
        price: 6527,
        rate: 4.7,
        type: 'wrls',
    },
    {
        img: 'Img/headphones/Image6.png',
        title: 'BOROFONE B04', 
        price: 7527,
        rate: 4.7,
        type: 'wrls',
    }

];

(function addIdCounts(){ // add props for work
    headphones.forEach(el => {
        el.id = (headphones.indexOf(el))
        el.counts = 1;
    })
})()