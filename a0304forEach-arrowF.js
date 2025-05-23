// Mostre no console cada parágrado do site
const paragArray = Array.from(paragrafos);
paragArray.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragArray.forEach((item) => console.log(item.innerHTML));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i);
