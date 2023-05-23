import { clickOnElement, f } from "./clickElement";

export const randomEl = (elements, image) => {
  setInterval(() => {
    let currentElements = [];
    let el;

    for (el of elements) {
      if (!el.hasChildNodes()) {
        currentElements.push(el);
      }
    }

    let random = Math.floor(Math.random() * currentElements.length);
    const element = currentElements[random];

    element.appendChild(image);

    element.classList.add("hasImage");

    element.addEventListener("click", clickOnElement);

    element.classList.remove("hasImage");
  }, 1000);
  return true;
};
