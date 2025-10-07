function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!");
  }
}

function sayColor() {
  let color = document.getElementById("colorInput").value;
  if (color.trim() === "") {
    alert("Please enter your color first!");
  } else {
    alert("Color: " + color + "!");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);
document.getElementById("colorBtn").addEventListener("click", sayColor);
