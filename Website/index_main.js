//Array of Slide Show Images
const slideShowImages = document.querySelectorAll(".intro .slideshow-img");
//Delay between Images
const imageDelay = 3000;
//Image Counter
let currentImageCounter = 0;

//Show the First Image
slideShowImages[currentImageCounter].style.opacity = 1;

//Set the interval of function nextImage running to every 3000 ms
setInterval(nextImage, imageDelay);

//Function nextImage
function nextImage(){
	//Set opacity of current image to 0 to hide it
	slideShowImages[currentImageCounter].style.opacity = 0;
	//Add 1 to the image counter and use the modulo operator to make sure that the image counter is in range from 0-slideShowImages.length-1
	currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
	//Set opacity of next image to 1 to show it
	slideShowImages[currentImageCounter].style.opacity = 1;
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	
  var currentScrollPos = window.pageYOffset;
  var difference = document.documentElement.scrollHeight - window.innerHeight;
  var scrollposition = document.documentElement.scrollTop;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.opacity = 1;
    document.getElementById("footer").style.opacity = 1;
	
  } 
    
  else {
    document.getElementById("navbar").style.opacity = 0;
    document.getElementById("footer").style.opacity = 0;
  }
  prevScrollpos = currentScrollPos;
  
  
  
  if (difference - scrollposition <= 2){
	document.getElementById("navbar").style.opacity = 1;
    document.getElementById("footer").style.opacity = 1;
  }
  
} 
