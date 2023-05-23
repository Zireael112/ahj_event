export const clickOnElement = () => {
  const image = document.querySelector("img");
  const divImage = image.parentNode;
  divImage.removeChild(image);

  const score = document.querySelector(".score");
  let value = Number(score.innerText);
  const calc = (value += 1);
  score.innerText = calc;
};
