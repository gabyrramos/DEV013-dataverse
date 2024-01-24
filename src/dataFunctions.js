// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//para crear los filtros?

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
//una funcion para filtrar
//parametros:data, filterby, como quiero filtrar(facts)



//una funcion para ordernar
//



//filtrar por valor que usuario le va a dar 