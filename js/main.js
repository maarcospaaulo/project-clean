window.addEventListener('load', ()=>{
  registerSW()
})

async function registerSW(){
  if('serviceWorker' in navigator){
      try{
          await navigator.serviceWorker.register("js/sw.js")
      } catch(e){
          console.log(`SW registration failed`);
      }
  }
}

const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const menu = document.querySelector(".menu");
  const navItens = document.querySelectorAll(".navbar>ul>li");

  burguer.addEventListener('click', () => {

    menu.classList.toggle('menu-active');

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


$('.slider').slick({
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000,
});
