import { randomEl } from "./randomElement";

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".element");
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png"
  );
  randomEl(elements, image);
});
