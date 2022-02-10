let didScroll = false;
let birds_container = document.querySelectorAll('.birds');
let birds = document.querySelectorAll('.bird');
let ratio = 0;
let diviseur = 0;


//Detection de scroll et animation des oiseaux.
//Technique d'animation des oiseaux inspirée de https://codepen.io/matchboxhero/pen/RLebOY
//Technique du request animation frame inspirée de https://codepen.io/ispykenny/pen/BaaYqYZ



// Detection du scroll. Si l'on dépace un point de réference "marker", les animations peuvent avoir lieu.
const scrollInProgress = () => {
    let y = window.scrollY;
    let marker = document.getElementById("marker").offsetTop;

    if (y > marker){
        didScroll = true;
    }

	birds.forEach((element, index) => {
		element.style.webkitAnimationPlayState = 'running';
	})	
	
}

const raf = () => {
	if(didScroll) {

		ratio = window.innerWidth / window.innerHeight;

		//trigger pour l'animation different en fonction de l'orientation du device.
		if (ratio <= 1){
			diviseur = 300;
		} else {
			diviseur = 800;
		}

		//animation des oiseaux. deplacement en fonction du scroll.
		birds_container.forEach((element, index) => {
			element.style.transform = "translateX("+ (window.scrollY - document.getElementById("marker").offsetTop) * (window.innerWidth / diviseur) + "%)"
		})
		
		
		
	
		didScroll = false;
		
	}
	requestAnimationFrame(raf);
	
}


//toutes les 30ms les oiseaux sont mis en pause. Tant que l'on scroll l'animation continue.
setInterval(pause,30);

function pause(){
	// console.log(didScroll)
	
		birds.forEach((element, index) => {
			element.style.webkitAnimationPlayState = 'paused';
		})
	
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress);

//Apparition de la section à propos.
document.querySelector(".footer .a").addEventListener("click", e => {
	document.querySelector(".about").style.display = "block";
	let Ypropos = document.querySelector("#about").offsetTop;
	// window.scrollTo(0,Ypropos)

	setTimeout(() => {
		window.scrollTo({
			top: Ypropos,
			left: 0,
			behavior: 'smooth'
		  });
		// console.log(Ypropos)
	}, 20);
	
});


//Faire disparaitre la section "à propos" si on en sort.
document.addEventListener("scroll", e => {
	let Ypropos = document.querySelector("#about").offsetTop;
	let y = window.scrollY + (window.innerHeight * 1.5);

	if (y < Ypropos){
		document.querySelector(".about").style.display = "none";
	}

})
let b1played = false;
let b2played = false;
let b3played = false;
//apparition des sections de textes explicatives.
document.addEventListener("scroll", e => {
	let y = window.scrollY - (window.innerHeight * 0.2);
	
	// console.log(`b1played = ${b1played}`)

	if ((y > document.querySelector("#b1").offsetTop) && (b1played == false)){
		b1played = true;
		// console.log(`b1played = ${b1played}`)

		document.querySelector("#b1").animate([
			// keyframes
			{ right: '-90%' },
			{ right: '0' }
		  ], {
			// timing options
			duration: 1000,
			// timingFunction: "cubic-bezier(.17,.67,1,-0.25)"
		  });
		  setTimeout(() => {
			  document.querySelector(".b1").style.right = "0";
		  }, 1000);
		
	}

	if ((y > document.querySelector("#b2").offsetTop) && (b2played == false)){
		b2played = true;
	

		document.querySelector("#b2").animate([
			// keyframes
			{ left: '-90%' },
			{ left: '0' }
		  ], {
			// timing options
			duration: 1000
		  });
		  setTimeout(() => {
			  document.querySelector(".b2").style.left = "0";
		  }, 1000);
		
	}

	if ((y > document.querySelector("#b3").offsetTop) && (b3played == false)){
		b3played = true;
		

		document.querySelector("#b3").animate([
			// keyframes
			{ right: '-90%' },
			{ right: '0' }
		  ], {
			// timing options
			duration: 1000
		  });
		  setTimeout(() => {
			  document.querySelector(".b3").style.right = "0";
		  }, 1000);
		
	}

})

document.querySelectorAll(".couleurPropos span").forEach(e => {
	let couleur = e.innerHTML;
	e.style.backgroundColor = couleur;
})

// let scale = 100;

// document.querySelector(".about .baob .texte").addEventListener("click", function(){
// 	scale += 50;
// 	document.querySelector(".about .baob").style.transform = `scale(${scale}%)`;
// });


// document.querySelector(".about .baob").addEventListener("mouseout", function(){
// 	scale = 100;
// 	document.querySelector(".about .baob").style.transform = `scale(${scale}%)`;
// });


let baoSpread = false;

//Mise d'une div en pleine écran "on click";
document.querySelector(".about .baob").addEventListener("click", function(){
	let Ybaob = document.querySelector(".about .baob .texte").offsetTop;
	console.log(Ybaob)


	if (!baoSpread){

	
	document.querySelector(".about .baob").style.position = "absolute";
	

	document.querySelector(".about .baob").animate([
		// keyframes
		{ padding: "0"},
		{ padding : "100vh 100vw" }
	  ], {
		// timing options
		duration: 1000
	  });
	  document.querySelector(".about .baob .texte").animate([
		// keyframes
		{ fontSize: "4vw"},
		{ fontSize : "10vw" }
	  ], {
		// timing options
		duration: 1000
	  });
	  setTimeout(() => {
		document.querySelector(".about .baob").style.padding = "100vh 100vw";
		document.querySelector(".about .baob .texte").style.fontSize = "10vw";
		baoSpread = true;
	  }, 1000);

	  document.que

	} else {
		document.querySelector(".about .baob").animate([
			// keyframes
			{ padding: "100vh 100vw"},
			{ padding : "0" }
		  ], {
			// timing options
			duration: 350
		  });
		  document.querySelector(".about .baob .texte").animate([
			// keyframes
			{ fontSize: "10vw"},
			{ fontSize : "4vw" }
		  ], {
			// timing options
			duration: 350
		  });
		  setTimeout(() => {
			document.querySelector(".about .baob").style.padding = "0 0";
			document.querySelector(".about .baob").style.position = "relative";
			document.querySelector(".about .baob .texte").style.fontSize = "4vw";
		
			baoSpread = false;
		  }, 350);
	}
});

// Retour en haut de page
document.querySelector(".retourHaut").addEventListener("click", function(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	  });
	
});

