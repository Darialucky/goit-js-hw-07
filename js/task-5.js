function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");
changeColor.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
