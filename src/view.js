export const renderItems = (data) => {
 
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Crear Funciones a usar
  let contenedor = "";
  data.forEach((movies) => {
    contenedor +=  `
    <li><dl itemscope itemtype="MOVIES">
    <dt>Nombre:</dd>
    <dd itemprop = "name">${movies.name}</dd>
    <dt>Descripción:</dd>
    <dd itemprop = "description">${movies.shortDescription}</dd>
    <dt>ingresos:</dd>
    <dd itemprop = "datos_importantes">$${movies.ingresos} USD</dd>
    <dt>Año de publicación:</dd>
    <dd itemprop = "datos_importantes">${movies.facts.fechaPublicacion}</dd>
    <dt>Premios Ganados:</dd>
    <dd itemprop = "datos_importantes">${movies.facts.premioGanado}</dd>
   </dl></li>`
    console.log();
  });
  // Retornar el contenedor actualizado
  return contenedor;
};