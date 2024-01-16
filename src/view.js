export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
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
  return 'example';
};