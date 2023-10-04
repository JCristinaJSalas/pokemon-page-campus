import { evaluaJsonServer} from "./funciones.js";
import { simbolo } from "./tipoPokemonImg.js";


const urlJsonServer = "http://127.0.54.1:5414/pokemons";

const modalPokemon = document.querySelector(".modal");
let infor;

export const alertPokemon = async (dataPokemon, urlImg) => {
  const infoPoke = await (await fetch(dataPokemon.url)).json();
  const infoJsonServer = await (await fetch(urlJsonServer)).json();
  const names = infoJsonServer.map((e) => e.nombre);

  //estilos personalizados
  const urlColor = await (await fetch(infoPoke.species.url)).json();
  const color =urlColor.color.name
  const estiloCaja = `color: ${color};border: 1.5px solid ${color};border-radius: 15px;`;


  //logo
  const tipoPoke = infoPoke.types.map((i) => i.type).map((tipo) => tipo.name);
  const tipoTexto = tipoPoke.map(
    (nombre) =>
      `<h4 class="tipo" >${nombre.toUpperCase()}</h4>`
  );
  const fotoTipo = simbolo(tipoPoke);


  let nuevaEspecificacion = []; // Variable para almacenar las especificaciones

  // Buscamos si el nombre del Pokémon está en la lista de nombres del servidor
  const index = names.indexOf(infoPoke.name);

  if (index !== -1) {
    // Si el nombre del Pokémon está en el servidor, asignamos las especificaciones
    infor = infoJsonServer[index];
    nuevaEspecificacion = infor.especificaciones;
  }

  const habilidades = infoPoke.stats;


  const contenedorPokemon = document.createElement("div");
  contenedorPokemon.style.cssText = estiloCaja;

  contenedorPokemon.innerHTML = `
  <style>
    input[type='range']::-webkit-slider-thumb {
    background-color: ${color}; opacity : 0.75;
  </style>
    <form id="habilidadesForm">
       
        <img src="${urlImg}" alt="${infoPoke.name}" class="imagenAlerta" />
        <h2>${infoPoke.name.toUpperCase()}</h2>
        <h5 class="experiencia"><i class='bx bx-bar-chart icono'></i> ${infoPoke.base_experience} EXP</h5>
        <div class="contenedor-foto">${fotoTipo}</div>

        ${nuevaEspecificacion.length > 0
          ? nuevaEspecificacion
              .map(
                (stat) => `
                <h4>${stat.name}</h4>
                <div class="contenedor-habilidades">
                
                <input class="rango" type="range" data-stat="${stat.name}" name="${stat.name}" value="${stat.base}" max="200" min="0" />
                <label class="stats-poke" data-stat="${stat.name}" id="${stat.name}">${stat.base}/200</label>
                </div>
            `
              )
              .join("")
          : habilidades
              .map(
                (stat) => `
                <h4>${stat.stat.name}</h4>
                <div class="contenedor-habilidades">
                
                <input class="rango" type="range" data-stat="${stat.stat.name}" name="${stat.stat.name}" value="${stat.base_stat}" max="200" min="0" />
                <label class="stats-poke" data-stat="${stat.stat.name}" id="${stat.stat.name}">${stat.base_stat}/200</label>
                </div>
            `
              )
              .join("")}
              <div class="contenedor-tipo-alerta">${tipoTexto.join("")}</div>
              <div class="contenedorBotones">
                <input type="button" value="X" class="botonCerrar"/>
                <input type="submit" value="Guardar" class="botonGuardar"/>
              </div>
             
    </form>
  `;

  modalPokemon.appendChild(contenedorPokemon);
  const habilidadesForm = document.getElementById("habilidadesForm");
  const boton = document.querySelector(".botonCerrar")
  boton.addEventListener("click", async () => {
    location.reload()
    });

  habilidadesForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const especificaciones = [];

    if (nuevaEspecificacion.length > 0) {
      // Si hay especificaciones existentes, actualiza sus valores
      nuevaEspecificacion.forEach((stat) => {
        const statName = stat.name;
        const input = habilidadesForm.querySelector(`input[data-stat="${statName}"]`);
        const habilidad = {
          name: statName,
          base: input.value,
        };
        especificaciones.push(habilidad);
      });
    } else {
      // Si no hay especificaciones existentes, crea nuevas
      habilidades.forEach((stat) => {
        const statName = stat.stat.name;
        const input = habilidadesForm.querySelector(`input[data-stat="${statName}"]`);
        const habilidad = {
          name: statName,
          base: input.value,
        };
        especificaciones.push(habilidad);
      });
    }

    const nombre = infoPoke.name;
    await evaluaJsonServer(urlJsonServer, nombre, especificaciones);
  });

  document.addEventListener("input", (e) => {
    if (e.target.matches(".rango")) {
      const statName = e.target.dataset.stat;
      const label = document.querySelector(`label[data-stat="${statName}"]`);
      label.textContent = `${e.target.value}/200`;
    }
  });
};
