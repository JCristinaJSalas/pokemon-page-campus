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
      title: `<h3>${info.name.toUpperCase()}</h3>`,
      html: `<h5><i class='bx bx-bar-chart'></i> ${experiencia}HP</h5>`,
      imageUrl: `${info.sprites.front_default}`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: `${info.name}`,
      color:"#000"
    });
  } catch (error) {
    console.log("Error en la alerta", error);
  }
};
