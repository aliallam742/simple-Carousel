var images =Array.from( document.querySelectorAll(".item img"));
var lightBox = document.querySelector(".carousel-container");
var close = document.querySelector(".x-arrow");
var next = document.querySelector(".right-arrow");
var prvios = document.querySelector(".left-arrow");
var img  = document.querySelector(".item-img");
var imageNumber;
for(var i = 0 ; i < images.length ; i++){
    images[i].addEventListener("click" , function (e) {
        lightBox.classList.replace("d-none" , "d-block");
        img.style.backgroundImage = `url(${e.target.getAttribute("src")})`;
        imageNumber =images.indexOf(e.target);
    })
}
function nextImage(){
    imageNumber++; 
    if(imageNumber > images.length-1 ){
        imageNumber=0;
    }
    var imageSrc = images[imageNumber].getAttribute("src");
    img.style.backgroundImage = `url(${imageSrc})`;
}
function previosImage(){
    imageNumber-- 
    if(imageNumber < 0 ){
        imageNumber=images.length-1;
    }
    var imageSrc = images[imageNumber].getAttribute("src");
    img.style.backgroundImage = `url(${imageSrc})`;
}
close.addEventListener("click" , function (){
    lightBox.classList.replace("d-block" , "d-none")
})
document.addEventListener("keydown", function(e){
    if(e.code == "ArrowRight"){
        nextImage()
    }
    if(e.code == "ArrowLeft"){
        previosImage()
    }
    if(e.code == "Escape"){
        lightBox.classList.replace("d-block" , "d-none");
    }
})
next.addEventListener("click",function(e){
    nextImage();
})
prvios.addEventListener("click",function(e){
    previosImage();
})