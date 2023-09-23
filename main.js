const myboton = document.querySelector("#pokemon");
const urlApi = "api-pokemon.json";
const parrafo = document.querySelector("#parrafo");

myboton.addEventListener("click", async () => {
  try {
    const info = await mostrarApi(urlApi);

    const { value: informacion } = await Swal.fire({
      title: "Busca tu Pokémon",
      input: "select",
      color: "#000",
      inputOptions: info.reduce((options, pokemon) => {
        options[pokemon.name] = pokemon.name;
        return options;
      }, {}),
      inputPlaceholder: "Selecciona un Pokemon",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (info.some((pokemon) => pokemon.name === value)) {
            resolve();
          } else {
            resolve("Selecciona un Pokémon válido");
          }
        });
      },
    });

    if (informacion) {
      const pokemonSeleccionado = info.find(
        (poke) => poke.name === informacion
      );
      mostrarPokemon(pokemonSeleccionado);
    }
  } catch (error) {
    console.log("Error al leer", error);
  }
});

const mostrarPokemon = async (element) => {
  console.log(element);
  let pokemonData = await mostrarApiPokemon(element);
  let imagenPokemon = pokemonData.sprites.front_default;
  console.log("esta img",imagenPokemon)
  element
    ? Swal.fire({
        title: "Sweet!",
        text: `${element.name}`,
        imageUrl: imagenPokemon,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image",
        color: "#000",
      })
    : "";
};

// leera el .json
const mostrarApi = async (urlApi) => {
  try {
    const data = await (await fetch(urlApi)).json();
    return data.results;
  } catch (error) {
    console.log("No se cargo la API", error);
  }
};

const mostrarApiPokemon = async (element) => {
  try {
    const pokemon = await (await fetch(element.url)).json();
    return pokemon;
  } catch (error) {
    console.log("Error al leer la url del pokemon", error);
  }
};













