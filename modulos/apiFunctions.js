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

const escribirMockapi = async (urlMockApi, name, especificaciones) => {
  const newData = especificaciones.map((info) => {
    const base = info.base_stat;
    const name = info.stat.name;
    const objecto = { name, base };

    return objecto;
  });
  const newDataPoke = { name, especificaciones: newData };
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDataPoke),
  };
  await (await fetch(urlMockApi, config)).json();
};
let identificador;

export const guardarPoke = async (urlMockApi, newEspecificaciones, name) => {
  const newPoke = { name, especificaciones: newEspecificaciones };
  const recorrerMockApi = await (await fetch(urlMockApi)).json();
  recorrerMockApi.map((info) => {
    identificador = info.id;
  });
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPoke),
  };
  const res = await (
    await fetch(urlMockApi + "/" + identificador, config)
  ).json();
};

export const evaluaMockapi = async (urlMockApi, name, especificaciones) => {
  const nameMockapi = (await leerMockapi(urlMockApi)).map((e) => e.name);

  nameMockapi.includes(name)
    ? ""
    : await escribirMockapi(urlMockApi, name, especificaciones);
};
