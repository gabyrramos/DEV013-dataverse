export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Crear Funciones a usar
  let root = "";
  data.forEach((movies) => {
    root +=  `
    <div class = "wrapper" bis_skin_checked="1">
     <div class="item-container" bis_skin_checked="1">
       <div class="movie-info" bis_skin_checked="1">
          <div class = "imagen" bis_skin_checked="1">
           <dd itemprop = "imagen" class="ddimagen">
           <img class = "img_movies" src=${movies.imageUrl}>
            </dd>
          </div>
         <div class = "atras">
         <dl itemscope itemtype="MOVIES">
         <dt>Nombre:</dt><dd itemprop="name">${movies.name}</dd>
         <dt>Short descripción:</dt><dd itemprop="shortdescription">${movies.shortDescription}</dd>
         <dt>Premios Ganados:</dt><dd itemprop="datos_importantes">${movies.facts.premioGanado}</dd>
         </dl></div>
       </div>
      </div>
    </div>`

  });
 
  // Retornar el contenedor actualizado
  return root;
  
};
//falta hacer testings de ul y de nuestra data

//otro componente que renderize lo que quiero mostrar, mi template de lo que voy a imprimir

