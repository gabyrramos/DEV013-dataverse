//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/datamovies.js';
import { example } from './dataFunctions.js';


/// Llamamos a la función renderItems y pasamos los datos
const showr = renderItems(data);
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML = showr;




//le paso la data que va a recorrer