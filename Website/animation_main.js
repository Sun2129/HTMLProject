
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

setInterval(start, 1000);

function start(){
	for(let i = 0; i < 10; i++){
		createParticle( Math.floor((Math.random() * vw) + 1), vh);
	}
}

function createParticle(x,y){
	const particle = document.createElement('particle');
	document.body.appendChild(particle);
	
	const size = Math.floor(Math.random() * 20 + 5);
  
	particle.style.width = `${size}px`;
	particle.style.height = `${size}px`;
	
	particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`; 
	
	const destinationX = Math.floor(Math.random() * vw) + 1;
	const destinationY = 0;
	
	const animation = particle.animate([
    {
		
		transform: `translate(${x}px, ${y}px)`,
		opacity: 1
    },
	
    {
		
		transform: `translate(${destinationX}px, ${destinationY}px)`,
		opacity: 0
    }
	
  ], {
		
		duration: 20000 + Math.random() * 30000,
		easing: 'cubic-bezier(0, .9, .57, 1)',
		
		delay: Math.random() * 200
	});
	
	
	
	animation.onfinish = () => {
		particle.remove();
	};
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

