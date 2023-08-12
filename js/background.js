const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const imgWrap = document.querySelector(".imgWrap");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bg");
bgImage.src = `img/${chosenImage}`;

imgWrap.appendChild(bgImage);
