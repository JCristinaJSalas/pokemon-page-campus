
import { mostrarApi, mostrarApiPokemon } from "./apiFunctions.js";
import { mostrarTarjeta } from "./mostrarTarjeta.js";


export const pokemonSection = async (urlApi) => {
  const data = await mostrarApi(urlApi);
  data.forEach(async (element) => {
    
    const individualData = await mostrarApiPokemon(element);
    console.log(individualData)
    mostrarTarjeta(individualData)


  });
};
