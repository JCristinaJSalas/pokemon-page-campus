import { alertPokemon } from "./modal.js";
const contenedorPokemons = document.querySelector("#contenedorPokemons");
const contenedormostrar = document.querySelector('#contenedor-mostrar')

//Leer la PokeAPI
export const readPokeApi = async (urlPokeApiLimite) => {
  const dataApiPoki = await (await fetch(urlPokeApiLimite)).json();
  return dataApiPoki;
};
//Mostrar los pokemones
export const writePokemon = async (urlPokeApiLimite) => {
  const pokemonesPokeApi = await readPokeApi(urlPokeApiLimite);
  const pokemones = pokemonesPokeApi.results;

  pokemones.map(async (dataPokemon) => {
    const dataPoke = await (await fetch(dataPokemon.url)).json();
    let urlImg = dataPoke.sprites.other.dream_world.front_default;
    urlImg = urlImg === null ? dataPoke.sprites.front_default : urlImg;
    urlImg = urlImg === null ? "/images/Pokebola.png" : urlImg;

      //estilos personalizados
  const urlColor = await (await fetch(dataPoke.species.url)).json();
  const color =urlColor.color.name
  const estiloCaja = `color: ${color};border: 1.5px solid ${color};`;

    const contenedor = document.createElement("div");
    contenedor.className = "contenedorPokemon";
    contenedor.style.cssText = estiloCaja;

    contenedor.innerHTML = ` 
        <img src="${urlImg}" alt="Pokemon ${dataPoke.name}" width="56px"/>
        <h1> ${dataPoke.name.toUpperCase()}</h1>
  
    `;
    contenedorPokemons.appendChild(contenedor);
    contenedor.addEventListener("click", async () => {
      contenedormostrar.classList.add('modalShow')
      await alertPokemon(dataPokemon,urlImg)
      });
    
  });

};
//Evalua si ya esta creado el pokemon
export const evaluaJsonServer = async (urlJsonServer,nombre, especificaciones) => {
  const dataJsonServer = await(await fetch(urlJsonServer)).json()
  let id = null; // Inicializamos el ID como nulo

  for (const item of dataJsonServer) {
    if (item.nombre === nombre) {
      id = item.id; // Si se encuentra el nombre, asignamos el ID correspondiente
      break; // Salimos del bucle una vez que encontramos el nombre
    }
  }
  id !== null
    ? await editarJsonServer(urlJsonServer,nombre, especificaciones,id)
    : await saveJsonServer(urlJsonServer,nombre, especificaciones)
};
//Guardar en la JSON-SERVER
export const saveJsonServer = async(urlJsonServer,nombre, especificaciones) => {
  const dataPoke = {nombre,especificaciones}
  const config = {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dataPoke)
  }
  await (await fetch(urlJsonServer, config)).json();
  console.log("Se guardo")
  location.reload()
}
//Editar el JSONSERVER
export const editarJsonServer = async(urlJsonServer,nombre, especificaciones,id) => {
  const dataPoke = {nombre,especificaciones}
  const config = {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dataPoke)
  }
  await (await fetch(urlJsonServer + `/${id}`, config)).json();
  console.log("Se edito")
  //location.reload()
}
