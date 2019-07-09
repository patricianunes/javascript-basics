console.log("love you!");

const changeImage = () => {
  const image = document.querySelector("#image1");
  image.setAttribute("src", "images/image1_2.jpg");
};

const changeBack = () => {
  const image = document.querySelector("#image1");
  image.setAttribute("src", "images/image1.jpg");
};
