const header = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      header.innerText = data.slip.advice;
    });
});
