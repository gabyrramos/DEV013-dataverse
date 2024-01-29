//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import {ordenarNombresAZ, ordenarNombresZA} from './dataFunctions.js';
import { generoMovies } from './dataFunctions.js';
import data from './data/datamovies.js';
//import { example } from './dataFunctions.js';

///Declaramos todas las constantes necesarias a usar
/// Llamamos a la función renderItems y pasamos los datos
const showr = renderItems(data);
const contenedor = document.getElementById('root');
contenedor.innerHTML = showr;
const selectSort = document.querySelector('[data-testid="select-sort"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]');


// Función para actualizar la vista cuando se cambian los selectores
const actualizarVista = () => {
  // Inicialmente, usa los datos sin ordenar
  
  // Verifica la opción seleccionada en el selector de orden
  let datosOrdenados = data;
  if (selectSort.value === 'asc') {
    datosOrdenados = ordenarNombresAZ(datosOrdenados);
  } else if (selectSort.value === 'desc') {
    datosOrdenados = ordenarNombresZA(datosOrdenados);

  }
  
  // Llama a la función renderItems y actualiza el contenido del contenedor
  const showo = renderItems(datosOrdenados);
  contenedor.innerHTML = showo;
};
  
const mostrarPorGenero = () => {
  // Obtén el valor seleccionado del selector

  const categoriaSeleccionada = selectFilter.value;
  //console.log(categoriaSeleccionada);
  // Llama a la función generoMovies para obtener las películas según el género
  const peliculasFiltradas = generoMovies(data, categoriaSeleccionada)
<<<<<<< HEAD
  
  if (selectSort.value === 'asc') {
    datosOrdenados = ordenarNombresAZ(peliculasFiltradas);
  } else if (selectSort.value === 'desc') {
    datosOrdenados = ordenarNombresZA(peliculasFiltradas);
  } else { datosOrdenados = peliculasFiltradas

  }
=======
>>>>>>> 0b0486718c3a145a30c008f61c3c11e2b63ecaad

  
};

if (selectSort.value === 'asc') {
    let datosGenero = ordenarNombresAZ(peliculasFiltradas);
  } else if (selectSort.value === 'desc') {
    let datosGenero = ordenarNombresZA(peliculasFiltradas);
  }
  const showp = renderItems(datosGenero);
  contenedor.innerHTML = showp  

// Agrega eventos de cambio a los selectores
  
const reset = document.querySelector('[data-testid="button-clear"]');
reset.addEventListener('click',function(){
  console.log("click");
  selectFilter.selectedIndex = 0;
  selectSort.selectedIndex = 0;
  console.log(showr);
  datosOrdenados = data;
  contenedor.innerHTML = renderItems(data);
  
});
selectSort.addEventListener('change', actualizarVista);
selectFilter.addEventListener('change', mostrarPorGenero);

