const screen = document.getElementById("screen");

let dotPressed = false;

function addToScreen(n) {
	screen.value += n;
}


function clearScreen() {
	screen.value = "";
}

function addDot() {
	if (dotPressed || !parseInt(screen.value.charAt( screen.value.length-1)) || screen.value.charAt( screen.value.length-1) === '.') {
		return;
	}
	screen.value += '.';
	dotPressed = true;
}

function backspace() {
	if(parseInt(screen.value.charAt( screen.value.length-1)) >= 0) {
	screen.value = screen.value.slice(0, -1)
	} else {
	screen.value = screen.value.slice(0, -3)
	}
}
function add() {
	dotPressed = false;
	if(parseInt(screen.value.charAt( screen.value.length-1)) >= 0) {
		screen.value += " + ";
	}
}

function subtract() {
	dotPressed = false;
	if(parseInt(screen.value.charAt( screen.value.length-1)) >= 0) {
	screen.value += " - ";
	}
}

function multiply() {
	dotPressed = false;
	if(parseInt(screen.value.charAt( screen.value.length-1)) >= 0) {
	screen.value += " * ";
	}
}

function divide() {
	dotPressed = false;
	if(parseInt(screen.value.charAt( screen.value.length-1)) >= 0) {
	screen.value += " / ";
	}
}

function equals() {
	dotPressed = false;
	if(parseInt(screen.value.charAt( screen.value.length-1)) >= 0) {
	screen.value = eval(screen.value);
	}
}

