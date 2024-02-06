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
  return genero; 
};


//Aqui van las funciones de las stadisticas:

// Calcular estadísticas de ingresos por género
export const calcularEstadisticasIngresosPorGenero = (data) => {
  return data.reduce((acumulador, pelicula) => {
    const { genero, ingresos } = pelicula;

    if (!acumulador[genero]) {
      acumulador[genero] = {
        cantidadPeliculas: 0,
        totalIngresos: 0,
        ingresoPromedio: 0,
      };
    }

    acumulador[genero].cantidadPeliculas++;
    acumulador[genero].totalIngresos += ingresos;
    acumulador[genero].ingresoPromedio =
      acumulador[genero].totalIngresos / acumulador[genero].cantidadPeliculas;

    return acumulador;
  }, {});
};

// Estadísticas por género 

export const premiosGanadosTotal = (data) => {
  const sumaTotalPremiosGanados = data.reduce(function(total, movie) {
    if (movie.facts && typeof movie.facts.premioGanado === 'number') {
      return total + movie.facts.premioGanado;
    }
    return total 
  }, 0);

  
  return sumaTotalPremiosGanados;
};

export const promedioPremiosGanados = (data) => {
  const sumaTotalPremiosGanados = premiosGanadosTotal(data);
  const promedioPremios = data.length > 0 ? sumaTotalPremiosGanados / data.length : 0;

  
  return promedioPremios;
};

