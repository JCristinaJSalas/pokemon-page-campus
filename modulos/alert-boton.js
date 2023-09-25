export const alertPokemon = async (info) => {
  try {
    let colorUrl = info.species.url;
    const colorData = await (await fetch(colorUrl)).json();
    const color = colorData.color.name;
    const colorEstilo = `color: ${color};border-bottom: 2px solid ${color}`;
    const colorEstiloTipo = `color: ${color};border: 2px solid ${color}; padding: 8px;margin:8px`;
    const colorId = `bacground-color: ${color};`;

    let imagenPokemon = info.sprites.front_default;
    let peso = info.weight;
    let experiencia = info.base_experience;
    let altura = info.height;
    let tipoPoke = info.types.map((i) => i.type).map((tipo) => tipo.name);
    let tipoTexto = tipoPoke.map(
      (nombre) =>
        `<h4 class="tipo" style="${colorEstiloTipo}">${nombre.toUpperCase()}</h4>`
    );

    simbolo(tipoPoke);
    Swal.fire({
      html: `
      <div class="contenedor-pokemon-alerta">
        <h4 class="circulo-id" style="${colorEstiloTipo}" >${info.id}</h4>
        <div class="contenedor-info-alerta">
          <div class="contenedor-titulo-alerta">
            <h3 class="titulo-alerta" style="${colorEstilo}">${info.name.toUpperCase()}</h3>
            <h5><i class='bx bx-bar-chart icono'></i> ${experiencia}HP</h5>
          </div>

          <div class="contenedor-texto-alerta" }>
            
            <h5><i class='bx bx-bug icono'></i> ${peso}</h5>
            <h5><i class='bx bx-vertical-top icono'></i> ${altura}</h5>
          </div><hr>
          <div class="contenedor-tipo-alerta" "> ${tipoTexto}</div>
        </div>
        <div class="contenedor-img-alerta">
          <img src="${imagenPokemon}" alt="Pokemon ${info.name}" />
          
        </div>
      </div>
      `,
      color: "#000",
      width: "390px",
    });
  } catch (error) {
    console.log("Error en la alerta", error);
  }
};

const simbolo = (tipoPoke) => {
  console.log(tipoPoke[0]);
  switch(tipoPoke[0]){
    case "grass":
      return 
  }
};
