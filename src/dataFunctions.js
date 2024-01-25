// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//para crear los filtros?
import data from './data/datamovies.js';
export const example = () => {

  return 'example';
};

export const anotherExample = () => {
  return [];
};

export const ordenarNombresAZ = (data) => {
  // Ordenar el array de objetos 'data' por el nombre en orden alfabético (A-Z)
   const dataOrdenada = data.slice().sort((a, b) => {
    const nombreA = a.name.toUpperCase();
    const nombreB = b.name.toUpperCase();

    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
    return 0;
  });

  return dataOrdenada;
};

export const ordenarNombresZA = (data) => {
  // Ordenar el array de objetos 'data' por el nombre en orden alfabético (A-Z)
    const dataOrdenada = data.slice().sort((a, b) => {
    const nombreA = a.name.toUpperCase();
    const nombreB = b.name.toUpperCase();

    if (nombreA > nombreB) {
      return -1;
    }
    if (nombreA < nombreB) {
      return 1;
    }
    return 0;
  });

  return dataOrdenada;
};

export const generoMovies = (data,categoriaSeleccionada) => {
  // Filtra las películas por el género seleccionado
  const genero = data.filter(movie=>movie.genero===categoriaSeleccionada)
  console.log(genero)
  return genero; 
};

