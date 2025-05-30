// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll("nav a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
  console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => item.classList.remove("ativo"));
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
all_img.forEach((item) => {
  console.log(item, item.hasAttribute("alt"));
});
