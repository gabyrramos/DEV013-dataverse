//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import {ordenarNombresAZ, ordenarNombresZA} from './dataFunctions.js';
import { generoMovies } from './dataFunctions.js';

import data from './data/datamovies.js';

const showr = renderItems(data);
const root = document.getElementById('root');
root.innerHTML = showr;
const selectSort = document.querySelector('[data-testid="select-sort"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]');
//const estadisticaPremios = document.querySelector('[id="estadistica-premios"]');
let datosOrdenados = [...data];

// Función para actualizar la vista cuando se cambian los selectores
const actualizarVista = () => {
  // Inicialmente, usa los datos sin ordenar
  
  // Verifica la opción seleccionada en el selector de orden
  
  if (selectSort.value === 'asc') {
    datosOrdenados = ordenarNombresAZ(datosOrdenados);
  } else if (selectSort.value === 'desc') {
    datosOrdenados = ordenarNombresZA(datosOrdenados);

  }
  // Llama a la función renderItems y actualiza el contenido del contenedor
  const showo = renderItems(datosOrdenados);
  root.innerHTML = showo;
};
  
const mostrarPorGenero = () => {
  // Obtén el valor seleccionado del selector

  const categoriaSeleccionada = selectFilter.value;
  //console.log(categoriaSeleccionada);
  // Llama a la función generoMovies para obtener las películas según el género
  const peliculasFiltradas = generoMovies(data, categoriaSeleccionada);
  
  if (selectSort.value === 'asc') {
    datosOrdenados = ordenarNombresAZ(peliculasFiltradas);
  } else if (selectSort.value === 'desc') {
    datosOrdenados = ordenarNombresZA(peliculasFiltradas);
  } else{
    datosOrdenados = peliculasFiltradas;
    console.log(peliculasFiltradas);
  }
  const showp = renderItems(datosOrdenados);
  root.innerHTML = showp;
  
};


// Agrega eventos de cambio a los selectores
  
const reset = document.querySelector('[data-testid="button-clear"]');
reset.addEventListener('click',function(){
  selectFilter.selectedIndex = 0;
  selectSort.selectedIndex = 0;
  //estadisticaPremios.selectedIndex = 0;
  datosOrdenados = data;
  root.innerHTML =renderItems(data);
});
selectSort.addEventListener('change', actualizarVista);
selectFilter.addEventListener('change', mostrarPorGenero);


//Creando las estadisticas

const totalPremiosGenero = document.querySelector('.statsPremios1');
const premiosGenero = document.querySelector('#premiosPorGenero');
const boton1 = document.querySelector('.cerrarBoton1');

premiosGenero.addEventListener('click', ()=> {
  totalPremiosGenero.showModal();
})
boton1.addEventListener('click', ()=> {
  totalPremiosGenero.close();
})

const totalPremios = document.querySelector('.statsPremios2');
const abrirTotalPremios = document.querySelector('#premiosTotal');
const boton2 = document.querySelector('.cerrarBoton2');

abrirTotalPremios.addEventListener('click', ()=> {
  totalPremios.showModal();
})
boton2.addEventListener('click', ()=> {
  totalPremios.close();
})

//Llamamos a la funcion de stats
