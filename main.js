import { busqueda } from "./modulos/busqueda.js";
import { mostrarTarjeta } from "./modulos/mostrarTarjeta.js";

const num = document.querySelector("#numPokemon");
const botonBusqueda = document.querySelector("#mostrarPokemons");
const contenedorPokemon = document.querySelector(".contenedor-pokemons");


const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=";


addEventListener("DOMContentLoaded", () => {
  const urlApiLimit = urlApi + num.value;
  mostrarTarjeta(urlApiLimit);
  const allPoke = urlApi + 1450;
  busqueda(urlApiLimit, allPoke);


  num.addEventListener("keydown", async (e) => {
    contenedorPokemon.innerHTML = "";
    if (e.key === "Enter") {
      const urlApiLimit = urlApi + num.value;
      await mostrarTarjeta(urlApiLimit);
    }
  });
  botonBusqueda.addEventListener("click", async (e) => {
    contenedorPokemon.innerHTML = "";
    const urlApiLimit = urlApi + num.value;
    await mostrarTarjeta(urlApiLimit);
  });
});
