import { writePokemon } from "./modulos/funciones.js";
//seleccion desde DOM
const limite = document.querySelector("#limite");
const urlPokeApi = "https://pokeapi.co/api/v2/pokemon?limit=";
// Uso del input para limites
addEventListener("DOMContentLoaded", () => {
  const limiteValue = limite.value;
  const urlPokeApiLimite = `${urlPokeApi + limiteValue}`;
  writePokemon(urlPokeApiLimite);
  limite.addEventListener("keydown", async (e) => {
    contenedorPokemons.innerHTML = "";
    if (e.key === "Enter") {
      const urlApiLimit = urlPokeApi + limite.value;
      await writePokemon(urlApiLimit);
    }
  });
  limite.addEventListener("input", async () => {
    contenedorPokemons.innerHTML = "";
    const urlApiLimit = urlPokeApi + limite.value;
    await writePokemon(urlApiLimit);
  });
});

