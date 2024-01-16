export const renderItems = (data) => {
   // Obtén el contenedor por su ID
  const contenedorParrafo = document.createElement('div');
  
   // Crear un elemento p (párrafo)
  const nuevoParrafo = document.createElement('p');
   
  // Agregar texto al nuevo párrafo con datos dinámicos
  nuevoParrafo.textContent = 'Epopeya';

   // Agregar el párrafo al contenedor
  contenedorParrafo.appendChild(nuevoParrafo);
 
  // Retornar el contenedor actualizado
  return contenedorParrafo;
};

// function crearParrafo(contenedor) {
//   const contenedor = document.getElementById('contenedor');

//   // Crear un elemento p (párrafo)
//   const nuevoParrafo = document.createElement('p');
  
//   // Agregar texto al nuevo párrafo con datos dinámicos
//   nuevoParrafo.textContent = 'Epopeya';

//   // Agregar el párrafo al contenedor
//   contenedor.appendChild(nuevoParrafo);

//   // Retornar el contenedor actualizado
//   return contenedor;
// //   // Creamos un elemento p = párrafo
// //   const nuevoParrafo = document.createElement('p');
// //   // Agregamos texto al nuevo párrafo
// //   nuevoParrafo.textContent = "Epopeya";
// //   // Agregamos el párrafo al contenedor
// //   contenedor.appendChild(nuevoParrafo);
// //   return nuevoParrafo;
// };