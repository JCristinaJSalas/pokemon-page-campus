const contenedorSlide = document.querySelector("#contenedor-images");

export const slideSection = (urlApi) => {
   contenedorSlide.swiper.appendSlide([
    '<div class="swiper-slide">Slide 2</div>',
    '<div class="swiper-slide">Slide 3</div>',
    '<div class="swiper-slide">Slide 4</div>'
  ]);
  contenedorSlide.swiper.update();
}
