
/*script slide images*/

//auto slides
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides"); 
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); 
}

var mslideIndex = 1;
mshowSlides(mslideIndex);

//maunal slides
function plusSlides(n) {
  mshowSlides(mslideIndex += n);
}

function currentSlide(n) {
  mshowSlides(mslideIndex = n);
}

function mshowSlides(n) {
  var i;
  var mslides = document.getElementsByClassName("mySlides");
  if (n > mslides.length) {mslideIndex = 1}    
  if (n < 1) {mslideIndex = mslides.length}
  for (i = 0; i < mslides.length; i++) {
      mslides[i].style.display = "none";  
  }
  mslides[mslideIndex-1].style.display = "block";  
}

