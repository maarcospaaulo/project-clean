window.addEventListener('load', ()=>{
  registerSW()
})

async function registerSW(){
  if('serviceWorker' in navigator){
      try{
          await navigator.serviceWorker.register("./sw.js")
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
        item.style.animation = `navLinkFade 0.6s ease forwards ${index / 6 + 1}s`;
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
