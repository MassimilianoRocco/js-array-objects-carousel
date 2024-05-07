const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

function creaHtml(){
    let mainElement = document.getElementById("main");
    mainElement.className = "main";

    let container = document.createElement("div");
    container.className = "container";
    mainElement.append(container);

    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    container.append(imgContainer);

    let imgElement;
    for (const image of images) {
        imgElement = document.createElement("img");
        imgElement.src= image.image;
        imgElement.className = "img-card";
        imgContainer.append(imgElement);
    }
    //AGGIUNGO LA CLASSE ACTIVE -----DA SISTEMARE 
    let activeImg = document.getElementsByClassName("img-card");
    activeImg[0].classList.add("active");
    activeImg[3].classList.add("img-pos-left");
    activeImg[2].classList.add("img-pos-left");

    //parte laterale dx
    let carouselContainer = document.createElement("div");
    carouselContainer.className= "carousel";
    mainElement.append(carouselContainer);

    let imgCarContainer = document.createElement("div");
    imgCarContainer.className="img-car-container" ;
    carouselContainer.append(imgCarContainer);

    let imgCarElem;
    for(const carImg of images){
        imgCarElem = document.createElement("img");
        imgCarElem.src = carImg.image;
        imgCarElem.className="set-img-car";
        imgCarContainer.append(imgCarElem);
    }
    let selectedImg = document.getElementsByClassName("set-img-car");
    selectedImg[0].classList.add("selected");
    selectedImg[3].classList.add("img-pos-left");
    selectedImg[2].classList.add("img-pos-left");
}