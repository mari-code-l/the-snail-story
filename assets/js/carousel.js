var slideIndex = 0;
showSlides();
function showSlides(){
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByName("dot");
for (i = 0; 1 < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "");
}