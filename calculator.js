const screen = document.getElementById("screen");
// const pressedKey =
const validOps = ["+", "-", "*", "/"];

document.addEventListener("keydown", event => {
  if (event.key >= 0 && event.key <= 9) {
    addToScreen(event.key);
  } else if (validOps.includes(event.key)) {
    operations(event.key);
  } else if (event.key === ".") {
    addDot();
  } else if (event.key === "=") {
    equals();
  }
});

let dotPressed = false;

function addToScreen(n) {
  screen.value += n;
}

function clearScreen() {
  screen.value = "";
}

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

function backspace() {
  if (parseInt(screen.value.charAt(screen.value.length - 1)) >= 0) {
    screen.value = screen.value.slice(0, -1);
  } else {
    screen.value = screen.value.slice(0, -3);
  }
}
function operations(op) {
  dotPressed = false;
  if (parseInt(screen.value.charAt(screen.value.length - 1)) >= 0) {
    screen.value += ` ${op} `;
  }
}

function equals() {
  dotPressed = false;
  if (parseInt(screen.value.charAt(screen.value.length - 1)) >= 0) {
    screen.value = eval(screen.value);
  }
}
