const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav__links");
  const navItens = document.querySelectorAll(".nav__itens");

  burguer.addEventListener('click', () => {

    nav.classList.toggle('nav-active');

    navItens.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
      }
    });

    burguer.classList.toggle('toggle');
  });
}

navSlide();