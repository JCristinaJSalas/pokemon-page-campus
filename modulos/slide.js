import { mostrarApi, mostrarApiPokemon } from "./apiFunctions.js";

const contenedorSlide = document.querySelector("#contenedor-images");

export const slideSection = async (urlApi) => {
  const data = await mostrarApi(urlApi);
  data.forEach(async (element) => {
    const individualData = await mostrarApiPokemon(element);
    let imagenPokemon = individualData.sprites.front_default;
    //Agregar al slide
    contenedorSlide.insertAdjacentHTML("beforeend",
     /*html*/ `
      <div class="contenedor-pokemon ">
      <div class="contenedor-img">
          <img src="${imagenPokemon}" alt="Pokemon ${element.name}" />
        </div>
        <div class="contenedor-titulo">
          <h3>${element.name.toUpperCase()}</h3>
        </div>
      </div>
      `
    );
  });
};
