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

    //AGGIUNGO LA CLASSE ACTIVE
    let activeImg = document.getElementsByClassName("img-card");
    activeImg[0].classList.add("active");
    activeImg[3].classList.add("img-pos-left");
    activeImg[2].classList.add("img-pos-left");

    //parte laterale dx
    let carouselContainer = document.createElement("div");
    carouselContainer.className= "carousel";
    container.append(carouselContainer);

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

    //AGGIUNGO LA CLASSE SELECTED
    let selectedImg = document.getElementsByClassName("set-img-car");
    selectedImg[0].classList.add("selected");
    selectedImg[3].classList.add("img-pos-left");
    selectedImg[2].classList.add("img-pos-left");

    //BUTTONS
    let upButtonContainer = document.createElement("div");
    upButtonContainer.className = "first-button-container";
    carouselContainer.append(upButtonContainer);

    let upButton = document.createElement("button");
    upButton.innerHTML = "&#11165";
    upButton.className = "button";
    upButton.id = "prevB";
    upButtonContainer.append(upButton);




    let downButtonContainer = document.createElement("div");
    downButtonContainer.className = "second-button-container";
    carouselContainer.append(downButtonContainer);

    let downButton = document.createElement("button");
    downButton.innerHTML = "&#11167";
    downButton.className = "button";
    downButton.id = "nextB";
    downButtonContainer.append(downButton);
}


//NEXT BUTTON CLICK FUNCTION
function nextClick(){
document.getElementById("nextB").addEventListener("click", function(){

    const selectedImg = document.querySelector(".active");
    const selectedEffect = document.querySelector(".selected");
    
    let nextImg = selectedImg.nextElementSibling;
    let nextEffect = selectedEffect.nextElementSibling;

    selectedImg.classList.remove("active");
    selectedEffect.classList.remove("selected");

    if(nextImg == null){
        nextImg= document.querySelector(".img-card:first-child"); 
        nextImg.classList.add("active");
    }
    else{
    nextImg.classList.add("active");
    }

    if(nextEffect == null){
        nextEffect= document.querySelector(".set-img-car:first-child"); 
        nextEffect.classList.add("selected");
    }
    else{
    nextEffect.classList.add("selected");
    }
});
}



//PREVIOUS BUTTON CLICK FUNCTION
function prevClick(){
document.getElementById("prevB").addEventListener("click", function(){
    
    const selectedImg = document.querySelector(".active");
    const selectedEffect = document.querySelector(".selected");

    let nextImg = selectedImg.previousElementSibling;
    let nextEffect = selectedEffect.previousElementSibling;
    
    selectedImg.classList.remove("active");
    selectedEffect.classList.remove("selected");

    if(nextImg == null){
        nextImg= document.querySelector(".img-card:last-of-type"); 
        nextImg.classList.add("active");
    }
    else{
    nextImg.classList.add("active");
    }

    if(nextEffect == null){
        nextEffect= document.querySelector(".set-img-car:last-child"); 
        nextEffect.classList.add("selected");
    }
    else{
    nextEffect.classList.add("selected");
    }
});
}