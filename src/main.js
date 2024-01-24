//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import {ordenarNombresAZ, ordenarNombresZA} from './dataFunctions.js';


import data from './data/datamovies.js';
import { example } from './dataFunctions.js';


/// Llamamos a la función renderItems y pasamos los datos
const showr = renderItems(data);
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML = showr;


const selectSort = document.querySelector('[data-testid="select-sort"]');

// Función para actualizar la vista cuando se cambian los selectores
const actualizarVista = () => {
    let datosOrdenados = data; // Inicialmente, usa los datos sin ordenar
  
    // Verifica la opción seleccionada en el selector de orden
    if (selectSort.value === 'asc') {
      datosOrdenados = ordenarNombresAZ(datosOrdenados);
     } else if (selectSort.value === 'desc') {
       datosOrdenados = ordenarNombresZA(datosOrdenados);
    }
  
    // Llama a la función renderItems y actualiza el contenido del contenedor
    const showo = renderItems(datosOrdenados);
    contenedor.innerHTML = showo;
  };
  
  // Agrega eventos de cambio a los selectores
 
  selectSort.addEventListener('change', actualizarVista);




//le paso la data que va a recorrer