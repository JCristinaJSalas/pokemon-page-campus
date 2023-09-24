import { mostrarApi , mostrarApiPokemon } from "./apiFunctions.js";
const myboton = document.querySelector("#pokemon");

export const heroSection = async(urlApi) => {
    
  try {
    myboton.addEventListener("click", async () => {
        console.log("click")
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
  } catch (error) {
    console.log("Error al mostrar en Hero", error);
  }
};

const mostrarPokemon = async (element) => {
    console.log(element);
    let pokemonData = await mostrarApiPokemon(element);
    let imagenPokemon = pokemonData.sprites.front_default;
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
  