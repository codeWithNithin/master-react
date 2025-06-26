const btn = document.getElementById("btn");
const count = document.getElementById('count');

let counter = 0;

btn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});
