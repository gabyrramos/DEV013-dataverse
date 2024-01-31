// Ordenar el array de objetos 'data' por el nombre en orden alfabético (A-Z)
export const ordenarNombresAZ = (data) => {
  const dataOrdenada = data.slice().sort((a,b)=>{
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

// Ordenar el array de objetos 'data' por el nombre en orden alfabético (Z-A)
export const ordenarNombresZA = (data) => {
  const dataOrdenada = data.slice().sort((a, b)=>{
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

// Filtra las películas por el género seleccionado
export const generoMovies = (data,categoriaSeleccionada) => {
  const genero = data.filter(movie=>movie.genero===categoriaSeleccionada)
  console.log(genero);
  return genero; 
};


//Aqui van las funciones de las stadisticas:

