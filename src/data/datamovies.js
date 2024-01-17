const peliculas = [
  {
    id: 1,
    name: "El Señor de los Anillos: El retorno del Rey",
    taquillera: true,
    ingresos: 1118888979,
    shortDescription: "Epopeya fantástica basada en la obra de J.R.R. Tolkien.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/se%C3%B1or-de-los-anillos.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "17 de diciembre de 2003",
      premioGanado: "11 premios de la Academia, incluyendo Mejor Película."
    }
    //intento 
  },
  {
    id: 2,
    name: "Titanic",
    taquillera: true,
    ingresos: 2208208395,
    shortDescription: "Romance dramático del trágico hundimiento del Titanic.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/titanic.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "18 de diciembre de 1997",
      premioGanado: "14 premios de la Academia, incluyendo Mejor Película."
    }
  },
  {
    id: 3,
    name: "Jurassic Park",
    taquillera: true,
    ingresos: 1049746767,
    shortDescription: "Aventura con dinosaurios creados genéticamente.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/jurassic-park.webp",
    facts: {
      taquillera: true,
      fechaPublicacion: "11 de junio de 1993",
      premioGanado: "3 premios de la Academia, innovación en efectos visuales."
    }
  },
  {
    id: 4,
    name: "El Padrino",
    taquillera: false,
    ingresos: 245066411,
    shortDescription: "Clásico del crimen dirigido por Francis Ford Coppola.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/el-padrino.jpeg",
    facts: {
      taquillera: false,
      fechaPublicacion: "24 de marzo de 1972",
      premioGanado: "3 premios de la Academia, incluyendo Mejor Actor (Marlon Brando)."
    }
  },
  {
    id: 5,
    name: "Harry Potter y la piedra filosofal",
    taquillera: true,
    ingresos: 974755371,
    shortDescription: "Primera entrega de la saga de Harry Potter.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/harry-potter-y-la-piedra-filosofal.jpeg",

    facts: {
      taquillera: true,
      fechaPublicacion: "10 de noviembre de 2001",
      premioGanado: "3 premios BAFTA."
    }
  },
  {
    id: 6,
    name: "Forrest Gump",
    taquillera: true,
    ingresos: 678226566,
    shortDescription: "Drama que sigue la vida extraordinaria de Forrest Gump.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/forret-gump.jpeg",
    facts: {
      taquillera: true,
      fechaPublicacion: "6 de julio de 1994",
      premioGanado: "6 premios de la Academia, incluyendo Mejor Película y Mejor Actor (Tom Hanks)."
    }
  },
  {
    id: 7,
    name: "Avatar",
    taquillera: true,
    ingresos: 2787965087,
    shortDescription: "Épica de ciencia ficción que explora el planeta Pandora.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/avatar.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "18 de diciembre de 2009",
      premioGanado: "3 premios de la Academia, incluyendo Mejor Dirección de Arte."
    }
  },
  {
    id: 8,
    name: "Matrix",
    taquillera: false,
    ingresos: 465366949,
    shortDescription: "Película de acción y ciencia ficción con el icónico Neo.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/matrix.webp",
    facts: {
      taquillera: false,
      fechaPublicacion: "31 de marzo de 1999",
      premioGanado: "4 premios de la Academia, principalmente en efectos visuales y edición de sonido."
    }
  },
  {
    id: 9,
    name: "La La Land",
    taquillera: false,
    ingresos: 448927588,
    shortDescription: "Musical romántico ambientado en Los Ángeles.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/La_La_Land.webp",
    facts: {
      taquillera: false,
      fechaPublicacion: "9 de diciembre de 2016",
      premioGanado: "6 premios de la Academia, incluyendo Mejor Director y Mejor Actriz (Emma Stone)."
    }
  },
  {
    id: 10,
    name: "Spider-Man: Sin camino a casa",
    taquillera: true,
    ingresos: 1852587115,
    shortDescription: "Aventuras del superhéroe Spider-Man en el multiverso.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/spider-man-sin-camino-a-casa.jpeg",
    facts: {
      taquillera: true,
      fechaPublicacion: "13 de diciembre de 2021",
      premioGanado: "Todavía no se han anunciado los premios al momento de mi conocimiento (2022)."
    }
  },
  {
    id: 11,
    name: "El Caballero de la Noche",
    taquillera: true,
    ingresos: 1004558444,
    shortDescription: "Batman se enfrenta al Joker en una ciudad en caos.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/Batman_el_Caballero_de_la_Noche.webp",
    facts: {
      taquillera: true,
      fechaPublicacion: "14 de julio de 2008",
      premioGanado: "2 premios de la Academia, incluyendo Mejor Actor de Reparto (Heath Ledger)."
    }
  },
  {
    id: 12,
    name: "E.T. el Extraterrestre",
    taquillera: true,
    ingresos: 792910554,
    shortDescription: "Amistad entre un niño y un extraterrestre.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/et-el-extraterrestre.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "11 de junio de 1982",
      premioGanado: "4 premios de la Academia, principalmente en efectos visuales y sonido."
    }
  },
  {
    id: 13,
    name: "Interestelar",
    taquillera: true,
    ingresos: 677471339,
    shortDescription: "Exploración espacial en busca de un nuevo hogar para la humanidad.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/interstellar.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "7 de noviembre de 2014",
      premioGanado: "1 premio de la Academia por Mejores Efectos Visuales."
    }
  },
  {
    id: 14,
    name: "La lista de Schindler",
    taquillera: false,
    ingresos: 321365567,
    shortDescription: "Drama histórico basado en la vida de Oskar Schindler.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/schindler_s_list.jpeg",
    facts: {
      taquillera: false,
      fechaPublicacion: "15 de diciembre de 1993",
      premioGanado: "7 premios de la Academia, incluyendo Mejor Película y Mejor Director."
    }
  },
  {
    id: 15,
    name: "Deadpool",
    taquillera: true,
    ingresos: 782636033,
    shortDescription: "Comedia de superhéroes con el irreverente Deadpool.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/deadpool.jpeg",
    facts: {
      taquillera: true,
      fechaPublicacion: "12 de febrero de 2016",
      premioGanado: "2 premios Critics' Choice Movie Awards."
    }
  },
  {
    id: 16,
    name: "Buscando a Nemo",
    taquillera: true,
    ingresos: 940335536,
    shortDescription: "Aventura animada en el océano en busca de un pez desaparecido.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/buscando-a-nemo.jpeg",
    facts: {
      taquillera: true,
      fechaPublicacion: "30 de mayo de 2003",
      premioGanado: "1 premio de la Academia por Mejor Película Animada."
    }
  },
  {
    id: 17,
    name: "Inception",
    taquillera: true,
    ingresos: 829895144,
    shortDescription: "Thriller de ciencia ficción que explora los sueños y la realidad.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/inception.jpeg",
    facts: {
      taquillera: true,
      fechaPublicacion: "8 de julio de 2010",
      premioGanado: "4 premios de la Academia, principalmente en efectos visuales y cinematografía."
    }
  },
  {
    id: 18,
    name: "Mujer Maravilla",
    taquillera: true,
    ingresos: 821847012,
    shortDescription: "Historia de la superheroína Wonder Woman de DC Comics.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/wonder-woman.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "15 de mayo de 2017",
      premioGanado: "2 premios Critics' Choice Movie Awards."
    }
  },
  {
    id: 19,
    name: "Toy Story 3",
    taquillera: true,
    ingresos: 1066969703,
    shortDescription: "Aventuras de juguetes enfrentándose al abandono.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/toy-story.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "18 de junio de 2010",
      premioGanado: "2 premios de la Academia, incluyendo Mejor Película Animada."
    }
  },
  {
    id: 20,
    name: "El Rey León",
    taquillera: true,
    ingresos: 1656943394,
    shortDescription: "Clásico animado de Disney que sigue la vida del león Simba.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/Lion_king_1.webp",
    facts: {
      taquillera: true,
      fechaPublicacion: "15 de junio de 1994",
      premioGanado: "2 premios de la Academia, incluyendo Mejor Banda Sonora Original."
    }
  },
  {
    id: 21,
    name: "El Gran Hotel Budapest",
    taquillera: false,
    ingresos: 174801324,
    shortDescription: "Comedia dramática dirigida por Wes Anderson.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/gran-hotel-budapest.jpg",
    facts: {
      taquillera: false,
      fechaPublicacion: "6 de febrero de 2014",
      premioGanado: "4 premios de la Academia, principalmente en diseño de vestuario y maquillaje."
    }
  },
  {
    id: 22,
    name: "Coco",
    taquillera: true,
    ingresos: 807082196,
    shortDescription: "Película animada de Pixar que celebra el Día de los Muertos.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/coco.jpeg",
    facts: {
      taquillera: true,
      fechaPublicacion: "27 de octubre de 2017",
      premioGanado: "2 premios de la Academia, incluyendo Mejor Película Animada."
    }
  },
  {
    id: 23,
    name: "The Social Network",
    taquillera: false,
    ingresos: 224920315,
    shortDescription: "Drama biográfico sobre la creación de Facebook.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/la-red-social.jpeg",
    facts: {
      taquillera: false,
      fechaPublicacion: "1 de octubre de 2010",
      premioGanado: "3 premios de la Academia, incluyendo Mejor Guión Adaptado."
    }
  },
  {
    id: 24,
    name: "Ratatouille",
    taquillera: true,
    ingresos: 623722818,
    shortDescription: "Comedia animada sobre un ratón que sueña con ser chef.",
    imageUrl: "https://github.com/gabyrramos/DEV013-dataverse/blob/f34c8aa89f1e86bbd947c9615aef6a68392cdf6c/Imagenes/ratatouille.jpg",
    facts: {
      taquillera: true,
      fechaPublicacion: "22 de junio de 2007",
      premioGanado: "1 premio de la Academia por Mejor Película Animada."
    }
  }
]