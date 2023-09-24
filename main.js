import { heroSection } from "./modulos/sweetAlert.js";
import { slideSection } from "./modulos/slide.js";

const urlApi = "api-pokemon.json";
addEventListener("DOMContentLoaded", async() => {
  await heroSection(urlApi);
  await slideSection(urlApi);
});
