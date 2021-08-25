
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