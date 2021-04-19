document.getElementById("apply").addEventListener("click", change);

function change() {
	let par = document.getElementById("main");
	par.style.borderStyle = "solid";
	let holder = "rgb(";
	holder += String(document.getElementById("border_red").value);
	holder += ", ";
	holder += String(document.getElementById("border_green").value);
	holder += ", ";
	holder += String(document.getElementById("border_blue").value);
	holder += ")";
	console.log(holder);
	par.style.borderColor = holder;
	holder = String(document.getElementById("border_width").value);
	par.style.borderWidth = holder;
	holder = "rgb(";
	holder += String(document.getElementById("back_red").value);
	holder += ", ";
	holder += String(document.getElementById("back_green").value);
	holder += ", ";
	holder += String(document.getElementById("back_blue").value);
	holder += ")";
	console.log(holder);
	par.style.backgroundColor = holder;
}
	