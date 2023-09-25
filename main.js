import { heroSection } from "./modulos/sweetAlert.js";
import { pokemonSection } from "./modulos/slide.js";
import { busqueda } from "./modulos/busqueda.js";

const num = document.querySelector("#numPokemon");
const botonBusqueda = document.querySelector("#mostrarPokemons");
const contenedorPokemon = document.querySelector(".contenedor-pokemons");


const url = "https://pokeapi.co/api/v2/pokemon"
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=";


addEventListener("DOMContentLoaded", () => {
  const urlApiLimit = urlApi + num.value;
        heroSection(urlApiLimit);
        pokemonSection(urlApiLimit);
        busqueda(url)

  num.addEventListener("keyup", async (e) => {
    contenedorPokemon.innerHTML = "";
    if (e.key === "Enter") {
      const urlApiLimit = urlApi + num.value;
      await heroSection(urlApiLimit);
      await pokemonSection(urlApiLimit);
      await busqueda(url)
    }
  });
  botonBusqueda.addEventListener("click", async (e) => {
    contenedorPokemon.innerHTML = "";
    const urlApiLimit = urlApi + num.value;
    await heroSection(urlApiLimit);
    await pokemonSection(urlApiLimit);
    await busqueda(url)
  });
});