var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function slideshow(){
  var slidenav= document.querySelector(".main-left-banner");
  var slideul = document.querySelector(".left-banner-page");
  var mobileIcon =document.querySelector(".mobile-icon");
  if(slideul.style.visibility === "visible"){
    slidenav.style.width="0px";
    slideul.style.visibility="hidden";
    mobileIcon.style.color="#000";
    slidenav.style.position="fixed";
    mobileIcon.innerHTML="&equiv;";
  }else{
    slidenav.style.width="100%";
    slidenav.style.position="absolute";
    slideul.style.visibility="visible";
    mobileIcon.style.color="#fff";
    mobileIcon.innerHTML="&times;";
  }
}

function home(){
  location.href='index.html';
}