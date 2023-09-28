import { evaluaMockapi, guardarPoke } from "./apiFunctions.js";
import { simbolo } from "./tipoPokemonImg.js";
let color;
let estatus;
let name, identificador;
const urlMockApi = "https://6509ed8cf6553137159c442b.mockapi.io/pokemonAPI";
export const alertPokemon = async (info) => {
  try {
    let colorUrl = info.species.url;
    const colorData = await (await fetch(colorUrl)).json();
    color = colorData.color.name;
    // objetos de estilos
    const colorEstilo = `color: ${color}; border-bottom: 2px solid ${color}`;
    const colorEstiloTipo = `color: ${color}; border: 2px solid ${color}; padding: 8px; margin: 8px`;

    let imagenPokemon = info.sprites.front_default;
    estatus = info.stats;
    let experiencia = info.base_experience;
    let tipoPoke = info.types.map((i) => i.type).map((tipo) => tipo.name);
    let tipoTexto = tipoPoke.map(
      (nombre) =>
        `<h4 class="tipo" style="${colorEstiloTipo}">${nombre.toUpperCase()}</h4>`
    );
    const fotoTipo = simbolo(tipoPoke);
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
            <h3 class="titulo-alerta" style="${colorEstilo}">${info.name.toUpperCase()}</h3>
            <h5><i class='bx bx-bar-chart icono'></i> ${experiencia} EXP</h5>
          </div>

          <div class="contenedor-texto-alerta">
            ${estatus
              .map(
                (e) => /*html*/ `
              <div class="container">
                <h4>${e.stat.name}</h4>
                <input class="rango" type="range" value="${e.base_stat}" data-stat="${e.stat.name}" max="150">
                <label data-stat="${e.stat.name}" id="${e.stat.name}">
                    ${e.base_stat}/150 
                </label>
              </div>`
              )
              .join("")}
          </div>
          <div class="contenedor-tipo-alerta">${tipoTexto.join("")}</div>
        </div>
        <div class="contenedor-img-alerta">
          <img src="${imagenPokemon}" alt="Pokemon ${info.name}" />
        </div>
        <input id="guardar" type="submit" value="Guardar" class="button"/>
      </div>
     
      `,
      color: "#000",
      width: "390px",
      showCancelButton: false,
      showCloseButton: false,
      cancelButtonColor: `${color}`,
    });
    const inputRanges = document.querySelectorAll(".rango");
    inputRanges.forEach((inputRange) => {
      inputRange.style.background = color;
    });
    name = info.name;
    identificador = info.id;
    const especificaciones = estatus;
    evaluaMockapi(urlMockApi, name, especificaciones);
  } catch (error) {
    console.log("Error en la alerta", error);
  }
  var objeto = new Object();
  const botonGu = document.querySelector("#guardar")

  document.addEventListener("input", (e) => {
    if (e.target.matches(".rango")) {
      let statName = e.target.dataset.stat;
      const label = document.querySelector(`#${statName}`);
      label.innerText = `${e.target.value}/150`;


      const valor = `${e.target.value}/150`;
      objeto.name = statName;
      objeto.base = valor;
      
    } 
  });
  botonGu.addEventListener('click',() => {
        guardarPoke(urlMockApi, objeto,name);
      })


};