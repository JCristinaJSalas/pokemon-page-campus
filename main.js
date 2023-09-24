import { heroSection } from "./modulos/sweetAlert.js";
import { pokemonSection } from "./modulos/slide.js";

const num = document.querySelector("#numPokemon");
const botonBusqueda = document.querySelector("#mostrarPokemons");
const contenedorPokemon = document.querySelector(".contenedor-pokemons");

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=";
addEventListener("DOMContentLoaded", async () => {

  const urlApiLimit = urlApi + num.value;
        await heroSection(urlApiLimit);
        await pokemonSection(urlApiLimit);

  num.addEventListener("keyup", async (e) => {
    contenedorPokemon.innerHTML = "";

    if (e.key === "Enter") {
      const urlApiLimit = urlApi + num.value;
      await heroSection(urlApiLimit);
      await pokemonSection(urlApiLimit);
    }
  });

  botonBusqueda.addEventListener("click", async (e) => {
    contenedorPokemon.innerHTML = "";
    const urlApiLimit = urlApi + num.value;
    await heroSection(urlApiLimit);
    await pokemonSection(urlApiLimit);
  });
});
