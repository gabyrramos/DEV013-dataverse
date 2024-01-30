export const renderItems = (data) => {
  console.log("data",data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Crear Funciones a usar
  let contenedor = "";
  data.forEach((movies) => {
    contenedor +=  `
    <div class = "wrapper">
     <div class="item-container">
       <div class="movie-info">
          <div class = "imagen">
           <dd itemprop = "imagen">
           <img class = "img_movies" src=${movies.imageUrl}>
            </dd>
          </div>
         <div class = "atras">
         <dl itemscope itemtype="MOVIES">
         <dt>Nombre:</dt><dd itemprop="name">${movies.name}</dd>
         <dt>Descripción:</dt><dd itemprop="description">${movies.shortDescription}</dd>
         <dt>Premios Ganados:</dt><dd itemprop="datos_importantes">${movies.facts.premioGanado}</dd>
         </dl></div>
       </div>
      </div>
    </div>`

  });
 
  // Retornar el contenedor actualizado
  return contenedor;
  
};
//falta hacer testings de ul y de nuestra data

//otro componente que renderize lo que quiero mostrar, mi template de lo que voy a imprimir

