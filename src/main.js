import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/data.js';


// Llamamos a la función renderItems y pasamos los datos
const contenedor = document.getElementById('contenedor');
contenedor.appendChild(renderItems);
//var contenedor = document.getElementById('contenedor');

// Imprimimos el contenedor actualizado (puedes omitir esto si no necesitas imprimirlo)
//console.log(contenedorActualizado);