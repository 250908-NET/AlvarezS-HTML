function sayHello() {
  alert("Hello from the external file!");
}

function sayBye() {
  alert("Bye from the external file!");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

btn = document.getElementById("byeBtn");
btn.addEventListener("click", sayBye);