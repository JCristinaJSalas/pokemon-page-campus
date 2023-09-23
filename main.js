// leera el .json
const mostrarApi = async (urlApi) => {
  try {
    const data = await (await fetch(urlApi)).json();
    return data.results;
  } catch (error) {
    console.log("No se cargo la API", error);
  }
};
