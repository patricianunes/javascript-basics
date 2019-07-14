console.log("to run make me fell good!");

function logReset(event) {
  event.preventDefault();
  name.value = " ";
  surname.value = " ";
  city.value = " ";
}

const form = document.getElementById("form");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const city = document.getElementById("city");

form.onreset = logReset;
