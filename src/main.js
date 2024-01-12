import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//Llamamos funciones desde view 

//Creamos una variable para obtener el contenido de p
var contenedor= document.getElementById('contenedor'); 
//Llamamos a la funcion
crearParrafo(contenedor);

console.log(example, renderItems(data), data);