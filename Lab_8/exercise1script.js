document.getElementById("check").addEventListener("click", validate); 

function validate() {
	let p1 = document.getElementById("first");
	let p2 = document.getElementById("second");
	if (p1.value != p2.value) {
		alert("Error: Passwords don't match");
	}
	else { 
		if (p1.value.length < 8 || p2.value.length < 8) {
			alert("Error: Password is less than eight characters");
		}
	}
}