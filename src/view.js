export const renderItems = (data) => {
  let contenedor = "";
  data.forEach((movies) => {
    contenedor +=  `
    <dl itemscope itemtype="MOVIES">
    <dt>Nombre:</dd>
    <dd itemprop = "name">${movies.name}</dd>
    <dt>Descripción:</dd>
    <dd itemprop = "description">${movies.shortDescription}</dd>
    <dt>Año de publicación:</dd>
    <dd itemprop = "datos_importantes">${movies.facts.fechaPublicacion}</dd>
    <dt>Premios Ganados:</dd>
    <dd itemprop = "datos_importantes">${movies.facts.premioGanado}</dd>
   </dl> `
  });
  // Retornar el contenedor actualizado
  return contenedor;
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