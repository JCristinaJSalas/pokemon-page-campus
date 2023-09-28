import { alertPokemon } from "./alert-pokemon.js";
import { mostrarTarjeta } from "./mostrarTarjeta.js";

const contenedorPokemon = document.querySelector(".contenedor-pokemons");
const inputBusqueda = document.querySelector("#busqueda");
// Funcion para realizar la busqueda
export const busqueda = async (urlApiLimit, allPoke) => {
  inputBusqueda.addEventListener("input", (e) => {
    const target = e.target.value;
    target === "" ? mostrarTarjeta(urlApiLimit) : realizarBusqueda(allPoke);
  });
};

// Funcion  busqueda
const realizarBusqueda = async (url) => {
  const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
  const data = await (await fetch(url)).json();

  //dataSimple son los 1292 pokemons
  const dataSimple = await data.results.map((e) => e.name);
  const resultadosFiltrados = dataSimple.filter((item) =>
    item.toLowerCase().includes(terminoBusqueda)
  );
  resultadosFiltrados.map(async (i) => {
    data.results.map((e) => {
      i === e.name ? mostrarTarjetaFiltrada(e.url) : " ";
    });
  });
};

const mostrarTarjetaFiltrada = async (url) => {
  contenedorPokemon.innerHTML = "";
  const individualData = await (await fetch(url)).json();
  let imagenPokemon = individualData.sprites.front_default;
  const urlColor = await (await fetch(individualData.species.url)).json();
  const color = urlColor.color.name;
  const estiloCaja = `color: ${color};border: 1.5px solid ${color};`;
  //contenedorPokemon.innerHTML = "";
  const contenedor = document.createElement("div");

  contenedor.className = "contenedor-pokemon";
  contenedor.id = individualData.id;
  contenedor.style.cssText = estiloCaja;
  contenedor.innerHTML = `
    <div class="contenedor-img">
      <img src="${imagenPokemon}" alt="Pokemon ${individualData.name}" />
    </div>
    <div class="contenedor-titulo">
      <h3>${individualData.name.toUpperCase()}</h3>
    </div>
  `;
  contenedorPokemon.appendChild(contenedor);
  contenedor.addEventListener("click", async () => {
    alertPokemon(individualData);
  });
};
