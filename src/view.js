export const renderItems = (data) => {
  let contenedor = "";
  data.forEach((movies) => {
    contenedor +=  `
    <li><dl itemscope itemtype="MOVIES">
    <dd itemprop = "imagen">
    <img class = "img movies" src=${movies.image}>
    </dd>
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