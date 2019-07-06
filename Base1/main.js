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

//Step 5
const multiply = () => {
  const firstNumber = document.getElementById("first_number").value;
  const secondNumber = document.getElementById("second_number").value;
  const answer = firstNumber * secondNumber;
  document.getElementById("answer").innerHTML = answer;
  event.preventDefault();
};

//Step 6
const remainder = () => {
  const firstNumber = document.getElementById("first_number").value;
  const secondNumber = document.getElementById("second_number").value;
  const remainder = firstNumber % secondNumber;
  document.getElementById("remainder").innerHTML = remainder;
  event.preventDefault();
};
