export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Crear Funciones a usar

  //Crear una funcion de parrafo 

  function crearParrafo(contenedor){
    //Creamos un elemento p = parrafo
    var nuevoParrafo = document.createElement('p');//creamos el elemento
    //Agregamos texto al nuevo parrafo 
    nuevoParrafo.textContent = 'Epopeya fantástica basada en la obra de J.R.R. Tolkien.';
    //Agregamos el parrafo al contenedor 
    contenedor.appendChild(nuevoParrafo);
  }

  return 'example';
};