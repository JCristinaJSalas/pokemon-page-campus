export const alertPokemon = (info) => {
  try {
    console.log("click", info);
    let imagenPokemon = info.sprites.front_default;
    let peso = info.weight;
    let experiencia = info.base_experience;
    let altura = info.height;
    let tipoPoke = info.types
      .map((i) => i.type)
      .map((tipo) => tipo.name)
      .map((nombre) => `<h4 class="tipo" >${nombre}</h4>`);

    Swal.fire({
      html: `
      <div class="contenedor-pokemon ">
        <div class="contenedor-titulo">
          <h3 class="titulo-alerta">${info.name.toUpperCase()}</h3>
        </div>
        <div class="contenedor-img">
          <img src="${imagenPokemon}" alt="Pokemon ${info.name}" />
        </div>
        <div class="contenedor-texto">
          <h5><i class='bx bx-bar-chart'></i> ${experiencia}HP</h5>
          <h5><i class='bx bx-bug'></i> ${peso}</h5>
          <h5><i class='bx bx-vertical-top'></i> ${altura}</h5>
        </div>
        <div class="contenedor-tipo"> ${tipoPoke}</div>
      </div>
      `,
      color: "#000",
      width: '300px'
    });
  } catch (error) {
    console.log("Error en la alerta", error);
  }
};
