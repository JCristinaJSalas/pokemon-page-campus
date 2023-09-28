import { pokemonSection } from "./PokeSeccion";

const inputBusqueda = document.querySelector("#busqueda");
const resultadoTabla = document.querySelector(".contenedor-busqueda");
const palabras = document.querySelector("#mostrar_palabras");

// Funcion para realizar la busqueda
export const busqueda = async (url) => {
  inputBusqueda.addEventListener("input", () => {
    realizarBusqueda(url);
  });
};

// Funcion  busqueda
const realizarBusqueda = async (url) => {
  const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
  const data = await (await fetch(url)).json();
  const dataSimple = data.results.map((e) => e.name);
  console.log("dataSimple",dataSimple);

  const resultadosFiltrados = dataSimple.filter((item) => item.toLowerCase().includes(terminoBusqueda));
  console.log(resultadosFiltrados);
} 
  /* 
  const mostrarResultados = (resultadosFiltrados) => {
    
    palabras.insertAdjacentHTML("beforeend", pokemonSection());
  };

  inputBusqueda.value === ""
    ? (palabras.innerHTML = "")
    : resultadosFiltrados.length === 0
    ? (palabras.innerHTML = "No hay tiene conincidencia")
    : mostrarResultados(resultadosFiltrados);
};*/

/* 
  // Filtro de data convirtiendolo a minuscula
  
  inputBusqueda.value === "" ? resultadoTabla.innerHTML = "" 
  : resultadosFiltrados.length === 0 ? resultadoTabla.innerHTML = "No hay tiene conincidencia" : (mostrarResultados(resultadosFiltrados));

};

// mostrar los resultados en la tabla
const mostrarResultados = (resultadosFiltrados) => {
  
  resultadoTabla.innerHTML = "";
  resultadoTabla.insertAdjacentHTML(
    "beforeend",
    /*html `
      <thead>
          <tr class="titulo">
              <td>Descripcion</td>
              <td>Tipo</td>
              <td>Valor (COP)</td>
          </tr>
      </thead>
      <tbody>
    `
  );
   resultadosFiltrados.forEach((resultado) => {
    
    resultadoTabla.insertAdjacentHTML(
      "beforeend",
       `
          <tr>
              <td>${resultado.descripcion}</td>
              <td>${resultado.eleccion}</td>
              <td>$ ${parseFloat(resultado.monto).toLocaleString("es-ES")}</td>
          </tr>
        `
    );
  });
  resultadoTabla.insertAdjacentHTML("beforeend", `</tbody>`);
*/
