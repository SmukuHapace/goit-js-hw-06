const rangeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeControl.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
