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

//Step 7
const multipleOperations = () => {
  const shoeSize = document.getElementById("shoe_size").value;
  const year = document.getElementById("year").value;
  const operationsShoe = (shoeSize * 2 + 5) * 50;
  const operationsYear = operationsShoe - year + 1766;
  document.getElementById("result").innerHTML = operationsYear;
  event.preventDefault();
};

//Step 8
const major = () => {
  const age = document.getElementById("age").value;
  if (age >= 18) {
    document.getElementById("text").innerText = "you are over 18";
  } else {
    document.getElementById("text").innerText = "you are under 18";
  }
  event.preventDefault();
};
