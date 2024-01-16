import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
var contenedor = document.getElementById('contenedor');
contenedor.innerHTML=renderItems;

console.log(example, renderItems(data), data);