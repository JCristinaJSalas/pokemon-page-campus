//import { busqueda } from "./modulos/busqueda.js";
import { busqueda } from "./modulos/busqueda.js";
import { mostrarTarjeta } from "./modulos/mostrarTarjeta.js";

const num = document.querySelector("#numPokemon");
const botonBusqueda = document.querySelector("#mostrarPokemons");
const contenedorPokemon = document.querySelector(".contenedor-pokemons");
const busquedaInput = document.querySelector(".text_input");

const url = "https://pokeapi.co/api/v2/pokemon";
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=";

addEventListener("DOMContentLoaded", () => {
  const urlApiLimit = urlApi + num.value;
  mostrarTarjeta(urlApiLimit);
  const allPoke = urlApi + 1350;
  busqueda(urlApiLimit, allPoke);

  // busqueda(url)

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
