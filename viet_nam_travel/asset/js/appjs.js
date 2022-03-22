// slides show 
let slideIndex = 0;
let slides =  document.getElementsByClassName("banner-image-container");
let dots = document.getElementsByClassName("dot");

function showSlides(n) {
     
     if (n >= slides.length) {
          slideIndex = 0;
     }
     if (n < 0) {
          slideIndex = slides.length - 1;
     }
     
     
     for (let i = 0; i < slides.length; i++) {
          slides[i].style.display ="none";
          dots[i].className = dots[i].className.replace(" active","");
          
     }
     
     slides[slideIndex].style.display="block";
     dots[slideIndex].className += " active";
    
}

showSlides(slideIndex);
function plusSlides(n) {
     showSlides(slideIndex += n);
}
function currentSlide(n) {
     showSlides(slideIndex = n-1);
}
// setInterval( plusSlides,3000);
// slide show end
let modal = document.getElementById("myModal");
let img = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let header = document.querySelector(".header");

for(let i = 0; i < img.length; i++) {
     img[i].onclick = function(){
          header.style.display = "none";
          modal.style.display = "block";
          modalImg.src = this.src;
          modalImg.style.borderRadius = "7px";
          captionText.innerHTML = this.alt;
        }
        
}
modal.onclick = function() {
     modal.style.display = "none";
     header.style.display = "flex";
}
// slides 2
let slideIndex2 = 0;
let slides2 =  document.getElementsByClassName("content-img-wrapper-box");

function showSlides2(n) {
     
     if (n >= slides2.length) {
          slideIndex2 = 0;
     }
     if (n < 0) {
          slideIndex2 = slides2.length - 1;
     }
     
     
     for (let i = 0; i < slides2.length; i++) {
          slides2[i].style.display ="none";
          
     }
     
     slides2[slideIndex2].style.display="block";

    
}
showSlides2(slideIndex2);
function plusSlides2(n) {
     showSlides2(slideIndex2 += n);
 }

//  smaill buton
let menuListSmall = document.querySelector(".box-container-small");
function menuButtonChange(x) {
  x.classList.toggle("change");
  menuListSmall.classList.toggle("displaySmallMenu");
}