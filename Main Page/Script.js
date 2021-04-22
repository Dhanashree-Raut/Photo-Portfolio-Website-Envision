var slideIndex = 1;
var slideIndex2 = 0;
showSlides(slideIndex);
showSlidesAuto();

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}


function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) 
	{slideIndex = 1}
  if (n < 1) 
	{slideIndex = slides.length}
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
 
}

function showSlidesAuto() 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}     
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlidesAuto, 5000); // Change image every 5seconds
}

