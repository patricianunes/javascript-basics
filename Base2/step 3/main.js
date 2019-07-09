console.log("Pat sua linda : )");

const changeText = () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const input = document.getElementById("name").value;
  div.innerText = input;
};
