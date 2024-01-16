import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/datamovies.js';


// Llamamos a la función renderItems y pasamos los datos
const showr = renderItems(data);
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML=showr;


// Imprimimos el contenedor actualizado (puedes omitir esto si no necesitas imprimirlo)
//console.log(contenedorActualizado);