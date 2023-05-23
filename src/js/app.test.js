import { randomEl } from "./randomElement";

test("timer", () => {
  const elements = document.querySelectorAll(".element");
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png"
  );

  randomEl(elements, image);
  expect(randomEl(elements, image)).toBe(true);
});
