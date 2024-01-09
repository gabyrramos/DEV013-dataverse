const movies = [
    {
      id: 1,
      name: "Pulp Fiction",
      shortDescription: "Crime masterpiece",
      description: "Pulp Fiction is a 1994 American crime film directed by Quentin Tarantino. It weaves several interconnected stories that revolve around the Los Angeles criminal underworld.",
      facts: {
        year: 1994,
        awards: 1,
        blockbuster: false
      }
    },
    {
      id: 2,
      name: "The Shawshank Redemption",
      shortDescription: "Prison drama",
      description: "The Shawshank Redemption is a 1994 drama film directed by Frank Darabont. It tells the story of a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover.",
      facts: {
        year: 1994,
        awards: 2,
        blockbuster: false
      }
    },
    {
      id: 3,
      name: "La La Land",
      shortDescription: "Musical romance",
      description: "La La Land is a 2016 musical romantic drama film directed by Damien Chazelle. It follows the love story between a jazz musician and an aspiring actress in Los Angeles.",
      facts: {
        year: 2016,
        awards: 6,
        blockbuster: true
      }
    },
    {
      id: 4,
      name: "The Godfather",
      shortDescription: "Mafia epic",
      description: "The Godfather is a 1972 crime film directed by Francis Ford Coppola. It portrays the powerful Italian-American crime family of Don Vito Corleone.",
      facts: {
        year: 1972,
        awards: 3,
        blockbuster: true
      }
    },
    {
      id: 5,
      name: "Titanic",
      shortDescription: "Epic romance",
      description: "Titanic is a 1997 epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron. It depicts the ill-fated maiden voyage of the RMS Titanic.",
      facts: {
        year: 1997,
        awards: 11,
        blockbuster: true
      }
    },
    {
      id: 6,
      name: "The Dark Knight",
      shortDescription: "Superhero thriller",
      description: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan. It is the second installment of Nolan's Batman trilogy, featuring the DC Comics character Batman.",
      facts: {
        year: 2008,
        awards: 8,
        blockbuster: true
      }
    },
    // ... and so on, up to 24 objects
  ];
  
  console.log(movies.length); // Output: 24
  