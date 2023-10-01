import { evaluaMockapi, guardarPoke, leerMockapi } from "./apiFunctions.js";
import { simbolo } from "./tipoPokemonImg.js";
let color,
  estatus,
  name,
  colorUrl,
  imagenPokemon,
  experiencia,
  tipoPoke,
  tipoTexto,
  statName,
  nombrePoke = [],
  nuevaEspacificacion,
  nombre;

const urlMockApi = "https://6509ed8cf6553137159c442b.mockapi.io/pokemonAPI";
const urlJsonServer = "http://127.0.54.1:5414/pokemons"

export const alertPokemon = async (info) => {
  try {
    const inputRanges = document.querySelectorAll(".rango");
    name = info.name;
    colorUrl = info.species.url;
    const colorData = await (await fetch(colorUrl)).json();
    color = colorData.color.name;
    // objetos de estilos
    const colorEstilo = `color: ${color}; border-bottom: 2px solid ${color}`;
    const colorEstiloTipo = `color: ${color}; border: 2px solid ${color}; padding: 8px; margin: 8px`;

    inputRanges.forEach((inputRange) => {
      inputRange.style.background = color;
    });
    
    nombre = info.name;
    imagenPokemon = info.sprites.front_default;
    estatus = info.stats;
    experiencia = info.base_experience;
    tipoPoke = info.types.map((i) => i.type).map((tipo) => tipo.name);
    tipoTexto = tipoPoke.map(
      (nombre) =>
        `<h4 class="tipo" style="${colorEstiloTipo}">${nombre.toUpperCase()}</h4>`
    );
    const fotoTipo = simbolo(tipoPoke);
    //Alerta
    const nameMockapi = await leerMockapi(urlJsonServer);
    nombrePoke = nameMockapi.map((e) => e.name);
    nuevaEspacificacion = nameMockapi.find(
      (e) => e.name === info.name
    )?.especificaciones;
   
    Swal.fire({
      html: `
      <style>
        input[type='range']::-webkit-slider-thumb {
          background-color: ${color}; opacity : 0.75;
        
      </style>
      <div class="contenedor-pokemon-alerta">
        <div class="contenedor-logo">
          <h4 class="circulo-id" style="${colorEstiloTipo}">${info.id}</h4>
          <div class="contenedor-foto">${fotoTipo}</div>
        </div>
        
        <div class="contenedor-info-alerta">
          <div class="contenedor-titulo-alerta">
            <h3 class="titulo-alerta" style="${colorEstilo}">${nombre.toUpperCase()}</h3>
            <h5><i class='bx bx-bar-chart icono'></i> ${experiencia} EXP</h5>
          </div>
          <div class="contenedor-tipo-alerta">${tipoTexto.join("")}</div>

          <form class="contenedor-texto-alerta ${info.name}" id="form-mockapi">
            ${
              nombrePoke.includes(nombre)
                ? nuevaEspacificacion
                  ? nuevaEspacificacion
                      .map(
                        (stat) => /*html*/ `
                        <div class="container">
                          <h4>${stat.name}</h4>
                          <input class="rango" type="range" data-stat="${stat.name}" name="${stat.name}" value="${stat.base}" max="200" min="0" />
                          <label class="stats-poke" data-stat="${stat.name}" id="${stat.name}">${stat.base}/200</label>
                        </div>
                      `
                      )
                      .join("")
                  : estatus
                      .map(
                        (stat) => /*html*/ `
                        <div class="container">
                          <h4>${stat.stat.name}</h4>
                          <input class="rango" type="range" data-stat="${stat.stat.name}" name="${stat.name}" value="${stat.base_stat}" max="200" min="0" />
                          <label class="stats-poke" data-stat="${stat.stat.name}" id="${stat.stat.name}">${stat.base_stat}/200</label>
                        </div>
                      `
                      )
                      .join("")
                : estatus
                    .map(
                      (stat) => /*html*/ `
                      <div class="container">
                        <h4>${stat.stat.name}</h4>
                        <input class="rango" type="range" data-stat="${stat.stat.name}" name="${stat.name}" value="${stat.base_stat}" max="200" min="0" />
                        <label class="stats-poke" data-stat="${stat.stat.name}" id="${stat.stat.name}">${stat.base_stat}/200</label>
                      </div>
                    `
                    )
                    .join("")
            }
            
          </form>
        </div>
        <div class="contenedor-img-alerta">
          <img src="${imagenPokemon}" alt="Pokemon ${info.name}" />
        </div>
      </div>
     
      `,
      color: "#000",
      width: "390px",
      showCancelButton: false,
      confirmButtonText: "Guardar",
      confirmButtonColor: `${color}`,
    }).then((result) => {
      if (result.isConfirmed) {
        let inputs = document.querySelectorAll(".rango");
        let newEspecificaciones = Array.from(inputs).map((input) => ({
          name: input.dataset.stat,
          base: parseInt(input.value),
        }));
        guardarPoke(urlJsonServer, newEspecificaciones, name);
      }
    });

    //evalua si esta en la Mockapi

    const especificaciones = await estatus;
    evaluaMockapi(urlJsonServer, name, especificaciones);

    document.addEventListener("input", (e) => {
      if (e.target.matches(".rango")) {
        statName = e.target.dataset.stat;
        const label = document.querySelector(`#${statName}`);
        label.innerText = `${e.target.value}/200`;
      }
    });
  } catch (error) {
    console.log("Error en la alerta", error);
  }
};
