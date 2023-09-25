const inputBusqueda = document.querySelector("#busqueda");
const resultadoTabla = document.querySelector(".contenedor-busqueda");
//const iconoBusqueda = document.querySelector('box-icon[name="search"]');
const palabras = document.querySelector("#mostrar_palabras")
// Funcion para realizar la busqueda
export const busqueda = async (url) => {
  // evento co teclado"
  inputBusqueda.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      realizarBusqueda(url);
    }
  });
  // evento con la lupa
  //iconoBusqueda.addEventListener("click", () => {
   // realizarBusqueda(url);
 // });
  // para telefono
  inputBusqueda.addEventListener("input", () => {
    realizarBusqueda(url);
  });
};

// Funcion  busqueda
const realizarBusqueda = async(url) => {
    const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
    const data = await (await fetch(url)).json();
    const dataSimple = data.results.map(element => element).map((e) => e.name)

    const resultadosFiltrados = dataSimple.filter((item) =>
        item.toLowerCase().includes(terminoBusqueda)
    );
    palabras.insertAdjacentHTML("beforeend", `
        <ul>
            <li>${resultadosFiltrados.map((e) => {
              const texto = e
            return texto
            })}</li>
        </ul>
    ` )
    console.log("click",resultadosFiltrados )


  // convertir la value a minuscula
  /* 
  


  

  // Filtro de data convirtiendolo a minuscula
  
  console.log(resultadosFiltrados)
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

};