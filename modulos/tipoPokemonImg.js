export const simbolo = (tipoPoke) => {
    console.log(tipoPoke[0]);
    let foto = "";
  
    switch (tipoPoke[0]) {
      case "grass":
        foto = `<img src="../images/tipos/grass.png"/>`;
        break;
      case "fire":
        foto = `<img src="../images/tipos/fire.png"/>`;
        break;
      case "poison":
        foto = `<img src="../images/tipos/poison.png"/>`;
        break;
      case "fighting":
        foto = `<img src="../images/tipos/fighting.png"/>`;
        break;
      case "flying":
        foto = `<img src="../images/tipos/flying.png"/>`;
        break;
      case "ground":
        foto = `<img src="../images/tipos/ground.png"/>`;
        break;
      case "rock":
        foto = `<img src="../images/tipos/rock.png"/>`;
        break;
      case "bug":
        foto = `<img src="../images/tipos/bug.png"/>`;
        break;
      case "ghost":
        foto = `<img src="../images/tipos/ghost.png"/>`;
        break;
      case "steel":
        foto = `<img src="../images/tipos/steel.png"/>`;
        break;
      case "water":
        foto = `<img src="../images/tipos/water.png"/>`;
        break;
      case "electric":
        foto = `<img src="../images/tipos/electric.png"/>`;
        break;
      case "psychic":
        foto = `<img src="../images/tipos/psychic.png"/>`;
        break;
      case "ice":
        foto = `<img src="../images/tipos/ice.png"/>`;
        break;
      case "dragon":
        foto = `<img src="../images/tipos/dragon.png"/>`;
        break;
      case "dark":
        foto = `<img src="../images/tipos/dark.webp"/>`;
        break;
      case "fairy":
        foto = `<img src="../images/tipos/fairy.png"/>`;
        break;
      default:
        foto = `<img src="../images/pokemon-icon.webp"/>`;
        break;
    }
  
    return foto;
  };