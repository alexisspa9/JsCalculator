// Screen element
const screen = document.getElementById("screen");
// const pressedKey =
const validOps = ["+", "-", "*", "/"];
// helper variable for "."
let dotPressed = false;


// Add Keyboard support
document.addEventListener("keydown", event => {
  if (event.key >= 0 && event.key <= 9) {
    addToScreen(event.key);
  } else if (validOps.includes(event.key)) {
    operations(event.key);
  } else if (event.key === ".") {
    addDot();
  } else if (event.key === "=") {
    equals();
  } else if (event.key === "Backspace") {
  	backspace();
  } else if (event.keyCode === 13) {
  	equals();
  }
});


// adds n value to screen element
function addToScreen(n) {
  screen.value += n;
}

// clears the screen element
function clearScreen() {
  screen.value = "";
}

// removes last pressed from screen element
function backspace() {
  if (parseInt(screen.value.charAt(screen.value.length - 1)) >= 0) {
    screen.value = screen.value.slice(0, -1);
  } else {
    screen.value = screen.value.slice(0, -3);
  }
}

// adds "." to number
function addDot() {
  if (
    dotPressed ||
    !parseInt(screen.value.charAt(screen.value.length - 1)) ||
    screen.value.charAt(screen.value.length - 1) === "."
  ) {
    return;
  }
  screen.value += ".";
  dotPressed = true;
}


// performs op operation
function operations(op) {
  dotPressed = false;
  if (parseInt(screen.value.charAt(screen.value.length - 1)) >= 0) {
    screen.value += ` ${op} `;
  }
}


// evaluates the solution of the screen element value
function equals() {
  dotPressed = false;
  if (parseInt(screen.value.charAt(screen.value.length - 1)) >= 0) {
    screen.value = eval(screen.value);
  }
}
