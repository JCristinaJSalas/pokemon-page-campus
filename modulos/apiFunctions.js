// leera el .json
export const mostrarApi = async (urlApiLimit) => {
    try {
      const data = await (await fetch(urlApiLimit)).json();
      return data.results;
    } catch (error) {
      console.log("No se cargo la API", error);
    }
  };
  
  export const mostrarApiPokemon = async (element) => {
    try {
      const pokemon = await (await fetch(element.url)).json();
      return pokemon;
    } catch (error) {
      console.log("Error al leer la url del pokemon", error);
    }
  };
  
  