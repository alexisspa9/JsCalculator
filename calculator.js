const screen = document.getElementById("screen");


function addToScreen(n) {
	screen.value += n;
}


function clearScreen() {
	screen.value = "";
}

function backspace() {
	if(parseInt(screen.value.charAt( screen.value.length-1))) {
	screen.value = screen.value.slice(0, -1)
	} else {
	screen.value = screen.value.slice(0, -3)
	}
}
function add() {
	if(parseInt(screen.value.charAt( screen.value.length-1))) {
		screen.value += " + ";
	}
}

function subtract() {
	if(parseInt(screen.value.charAt( screen.value.length-1))) {
	screen.value += " - ";
	}
}

function multiply() {
	if(parseInt(screen.value.charAt( screen.value.length-1))) {
	screen.value += " * ";
	}
}

function divide() {
	if(parseInt(screen.value.charAt( screen.value.length-1))) {
	screen.value += " / ";
	}
}

function equals() {
	if(parseInt(screen.value.charAt( screen.value.length-1))) {
	screen.value = eval(screen.value);
	}
}

