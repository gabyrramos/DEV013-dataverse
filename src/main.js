//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import {ordenarNombresAZ, ordenarNombresZA} from './dataFunctions.js';
import { generoMovies } from './dataFunctions.js';
import data from './data/datamovies.js';
//import { example } from './dataFunctions.js';

///Declaramos todas las constantes necesarias a usar
/// Llamamos a la función renderItems y pasamos los datos
const showr = renderItems(data);
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML = showr;
const selectSort = document.querySelector('[data-testid="select-sort"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]');

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
  
const mostrarPorGenero = () => {
  // Obtén el valor seleccionado del selector
  const categoriaSeleccionada = selectFilter.value;
  //console.log(categoriaSeleccionada);
  // Llama a la función generoMovies para obtener las películas según el género
  const peliculasFiltradas = generoMovies(data, categoriaSeleccionada);
  console.log(peliculasFiltradas);

  return peliculasFiltradas;
};
// Agrega eventos de cambio a los selectores
  
const reset = document.getElementById("reset-button");
reset.addEventListener('click',function(){
  selectSort.value = "";
  selectFilter.value = "";
  contenedor.innerHTML = showr;
});
selectSort.addEventListener('change', actualizarVista);
selectFilter.addEventListener('change', mostrarPorGenero);

