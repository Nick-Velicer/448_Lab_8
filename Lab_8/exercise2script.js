let slides = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpeg"];

let counter = 0;

document.getElementById("back").addEventListener("click", prev); 
document.getElementById("forward").addEventListener("click", next); 

function prev() {
	if (counter == 0) {
		counter = 4;
	}
	else {
		counter -= 1;
	}
	document.getElementById("slide").src = slides[counter];
	document.getElementById("slide").width = "250";
	document.getElementById("slide").height = "250";
}

function next() {
	if (counter == 4) {
		counter = 0;
	}
	else {
		counter += 1;
	}
	document.getElementById("slide").src = slides[counter%5];
	document.getElementById("slide").width = "250";
	document.getElementById("slide").height = "250";
}