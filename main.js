//import { busqueda } from "./modulos/busqueda.js";
import { mostrarTarjeta } from "./modulos/mostrarTarjeta.js";

const num = document.querySelector("#numPokemon");
const botonBusqueda = document.querySelector("#mostrarPokemons");
const contenedorPokemon = document.querySelector(".contenedor-pokemons");


const url = "https://pokeapi.co/api/v2/pokemon"
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=";


addEventListener("DOMContentLoaded", () => {

  const urlApiLimit = urlApi + num.value;
  mostrarTarjeta(urlApiLimit)
 // busqueda(url)

 /*  num.addEventListener("keydown", async (e) => {
    contenedorPokemon.innerHTML = "";
    if (e.key === "Enter") {
      const urlApiLimit = urlApi + num.value;
      await mostrarTarjeta(urlApiLimit);
    //  await busqueda(url)
    }
  });
  botonBusqueda.addEventListener("click", async (e) => {
    contenedorPokemon.innerHTML = "";
    const urlApiLimit = urlApi + num.value;
    await mostrarTarjeta(urlApiLimit)
   // await busqueda(url)
  }); */
});