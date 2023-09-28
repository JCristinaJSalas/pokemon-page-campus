// leera el .json
export const mostrarApi = async (urlApiLimit) => {
  try {
    const data = await (await fetch(urlApiLimit)).json();
    return data.results;
  } catch (error) {
    console.log("No se cargo la API", error);
  }
};

export const mostrarApiPokemon = async (element) => {
  try {
    const pokemon = await (await fetch(element.url)).json();
    return pokemon;
  } catch (error) {
    console.log("Error al leer la url del pokemon", error);
  }
};

export const leerMockapi = async (urlMockapi) => {
  const dataMockapi = await (await fetch(urlMockapi)).json();
  return dataMockapi;
};


const escribirMockapi = async (urlMockApi,name,especificaciones) => {
  const newData = especificaciones.map((info) => {
    const base = info.base_stat;
    const name = info.stat.name;
    const objecto = { name, base };
    return objecto;
  });
  const newDataPoke = {name, especificaciones:newData}
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDataPoke),
  };
  await (await fetch(urlMockApi, config)).json();
};



export const evaluaMockapi = async (urlMockApi, name, especificaciones) => {
  const nameMockapi = (await leerMockapi(urlMockApi)).map((e) => e.name);
  nameMockapi.includes(name)
    ? console.log("Ya esta, No se agrega")
    : escribirMockapi(urlMockApi, name, especificaciones);
};



