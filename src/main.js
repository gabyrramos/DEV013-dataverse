//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import {ordenarNombresAZ, ordenarNombresZA, premiosGanadosTotal, promedioPremiosGanados} from './dataFunctions.js';
import { generoMovies } from './dataFunctions.js';
import { calcularEstadisticasIngresosPorGenero } from './dataFunctions.js';
import data from './data/datamovies.js';



const showr = renderItems(data);
const root = document.getElementById('root');
root.innerHTML = showr;
const selectSort = document.querySelector('[data-testid="select-sort"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]');
//const estadisticaPremios = document.querySelector('[id="estadistica-premios"]');
const totalGenero = document.querySelector('.statsPremios1');
const abrirTotalPremios = document.querySelector('#premiosTotal');
const boton2 = document.querySelector('.cerrarBoton2');
const boton1 = document.querySelector('#premiosPorGenero');
const button1 = document.querySelector('.cerrarBoton1');
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

//estadistica 1

const imprimirEstadisticasPorGenero = (estadisticas) => {
  const dialog = document.getElementById('statsPremios1');
  const generoTitulo = document.getElementById('generoTitulo');
  const cantidadPeliculas = document.getElementById('cantidadPeliculas');
  const totalIngresos = document.getElementById('totalIngresos');
  const ingresoPromedio = document.getElementById('ingresoPromedio');

  // Limpiar contenido previo
  generoTitulo.innerHTML = '';
  cantidadPeliculas.textContent = '';
  totalIngresos.textContent = '';
  ingresoPromedio.textContent = '';

  for (const genero in estadisticas) {
    // Crear elemento li para el nombre del género
    const generoLi = document.createElement('li');
    generoLi.textContent = `${genero}:`;

    // Crear lista ul para cada género
    const listaUl = document.createElement('ul');

    // Crear elementos li para cada estadística
    const cantidadLi = document.createElement('li');
    cantidadLi.textContent = `Cantidad de películas: ${estadisticas[genero].cantidadPeliculas}`;

    const ingresosLi = document.createElement('li');
    ingresosLi.textContent = `Total de ingresos: $${estadisticas[genero].totalIngresos.toLocaleString()}`;

    const ingresoPromedioLi = document.createElement('li');
    ingresoPromedioLi.textContent = `Ingreso promedio: $${estadisticas[genero].ingresoPromedio.toLocaleString()}`;

    // Adjuntar elementos li al contenedor ul
    listaUl.appendChild(cantidadLi);
    listaUl.appendChild(ingresosLi);
    listaUl.appendChild(ingresoPromedioLi);

    // Adjuntar lista ul al contenedor generoTitulo
    generoLi.appendChild(listaUl);
    generoTitulo.appendChild(generoLi);
  }

  // Abre el dialog
  dialog.showModal();
};


boton1.addEventListener('click', ()=> {
  const estadisticas = calcularEstadisticasIngresosPorGenero(data);
  imprimirEstadisticasPorGenero(estadisticas);
  totalGenero.showModal();
})

button1.addEventListener('click', ()=> {
  totalGenero.close();
})

//estadistica 2

const mostrarEstadisticasPremios = (totalPremios, promedioPremios) => {
  const dialog2 = document.getElementById('statsPremios2');
  const totalSuma = document.getElementById('totalSumaPremios');
  const totalPromedio = document.getElementById('promedioSumaPremios');
  
  
  totalSuma.textContent = "";
  totalPromedio.textContent = "";
  totalSuma.textContent = `Total de Premios Ganados: ${totalPremios.toLocaleString()}`;
  totalPromedio.textContent = `Total de Premios Ganados: ${promedioPremios.toLocaleString()}`;
  
  dialog2.showModal();
}



abrirTotalPremios.addEventListener('click', () => {
  
  const premiosData = (data);
  const totalPremios = premiosGanadosTotal(premiosData);
  const promedioPremios = promedioPremiosGanados(premiosData);
  mostrarEstadisticasPremios(totalPremios, promedioPremios);
  
});


boton2.addEventListener('click', () => {
  const dialog2 = document.getElementById("statsPremios2");
  dialog2.close();
});