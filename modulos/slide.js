import { mostrarApi, mostrarApiPokemon } from "./apiFunctions.js";

const contenedorSlide = document.querySelector("#contenedor-images");

export const slideSection = async (urlApi) => {
  const data = await mostrarApi(urlApi);
  data.forEach(async (element) => {
    const individualData = await mostrarApiPokemon(element);
    let imagenPokemon = individualData.sprites.front_default;
    let peso = individualData.weight;
    let experiencia = individualData.base_experience;
    let altura = individualData.height;
    let tipoPoke = individualData.types
      .map((i) => i.type)
      .map((tipo) => tipo.name)
      .map((nombre) => `<h4>${nombre}</h4>`);

    //Agregar al slide
    contenedorSlide.swiper.appendSlide(
      `
      <div class="swiper-slide">
        <h3>${element.name}</h3>
        <div class="contenedor-img">
          <img src="${imagenPokemon}" alt="Pokemon ${element.name}" />
        </div>
        <h5>${peso}</h5>
        <h5>${experiencia}</h5>
        <h5>${altura}</h5>
        <h4>${tipoPoke}</h4>
      </div>
      `
    );

    console.log("poke", pokeIndividual);
    contenedorSlide.swiper.update();
  });
};
