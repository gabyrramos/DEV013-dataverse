import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/datamovies.js';


// Llamamos a la función renderItems y pasamos los datos
const showr = renderItems(data);
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML=showr;

//Creamos una variable para obtener el contenido de p
var contenedor= document.getElementById('contenedor'); 
//Llamamos a la funcion
crearParrafo(contenedor);

// Imprimimos el contenedor actualizado (puedes omitir esto si no necesitas imprimirlo)
//console.log(contenedorActualizado);