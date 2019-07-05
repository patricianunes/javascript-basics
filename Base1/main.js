console.log("linda!");

//Step 1: Variables
const name = "Gabriela";
alert(name);

//Step 2
const surname = "Campos";
const city = "Sydney";
alert(`Nom: ${name}\nPrenom: ${surname}\nVille: ${city}`);

//Step 3: String concatenation
let userName = prompt("What is your name?");
alert(`Hello ${userName}`);

//Step 4:
const formData = () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const city = document.getElementById("city").value;
  alert(`Hello, ${name} ${surname}, you are from ${city} `);
  event.preventDefault();
};
