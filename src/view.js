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
    <dt>Premios Ganados:</dd>
    <dd itemprop = "datos_importantes">${movies.facts.premioGanado}</dd>
   </dl></li>`
  });
  // Retornar el contenedor actualizado
  return contenedor;
};
//falta hacer testings de ul y de nuestra data

//otro componente que renderize lo que quiero mostrar, mi template de lo que voy a imprimir
