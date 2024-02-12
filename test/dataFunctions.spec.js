//import { example, anotherExample } from '../src/dataFunctions.js';

import { ordenarNombresAZ, ordenarNombresZA, generoMovies, premiosGanadosTotal, promedioPremiosGanados } from '../src/dataFunctions.js';

describe('ordenarNombresAZ', () => {
  it('debería ordenar correctamente un array de objetos por el campo "name" en orden alfabético ascendente', () => {
    const data = [
      { name: 'Simon' },
      { name: 'Joaquin' },
      { name: 'Adriana' },
    ];
    const resultadoEsperado = [
      { name: 'Adriana' },
      { name: 'Joaquin' },
      { name: 'Simon' },
    ];
    expect(ordenarNombresAZ(data)).toEqual(resultadoEsperado);
  });

  it('debería mantener el orden si el array ya está ordenado alfabéticamente', () => {
    const data = [
      { name: 'Adriana' },
      { name: 'Joaquin' },
      { name: 'Simon' },
    ];
    expect(ordenarNombresAZ(data)).toEqual(data);
  });

  it('debería devolver un array vacío si se proporciona un array vacío', () => {
    expect(ordenarNombresAZ([])).toEqual([]);
  });

});

describe('ordenarNombresZA', () => {
  it('debería ordenar correctamente un array de objetos por el campo "name" en orden alfabético ascendente', () => {
    const data = [
      { name: 'Simon' },
      { name: 'Joaquin' },
      { name: 'Adriana' },
    ];
    const resultadoEsperado = [
      { name: 'Simon' },
      { name: 'Joaquin' },
      { name: 'Adriana' },
    ];
    expect(ordenarNombresZA(data)).toEqual(resultadoEsperado);
  });

  it('debería mantener el orden si el array ya está ordenado alfabéticamente', () => {
    const data = [
      { name: 'Simon' },
      { name: 'Joaquin' },
      { name: 'Adriana' },
    ];
    expect(ordenarNombresZA(data)).toEqual(data);
  });

  it('debería devolver un array vacío si se proporciona un array vacío', () => {
    expect(ordenarNombresZA([])).toEqual([]);
  });
});

describe('generoMovies', () => {
  const data = [
    { genero: 'Romance' },
    { genero: 'Action' },
  ];
  const categoriaSeleccionada = 'Romance';

  it('deberia retornar el genero correcto', () => {
    const resultado = generoMovies(data, categoriaSeleccionada);
    expect(resultado).toEqual([{ genero: 'Romance' }]);
  });
});


describe('premiosGanadosTotal', () => {
  const data = [
    { facts: { premioGanado: 1 } },
    { facts: { premioGanado: 2 } },
  ];

  it('Deberia sumar todos los premios ganados de los 24 objetos', () => {
    const sumatoria = premiosGanadosTotal(data);
    expect (sumatoria).toBe(3);
  });
});

describe('promedioPremiosGanados', () => {
  const data = [
    { facts: { premioGanado: 1 } },
    { facts: { premioGanado: 2 } },
  ];
  
  it('Deberia dar el promedio de la suma total entre los 24 objetos', () =>{
    const sumatoria = premiosGanadosTotal(data);
    const datos = promedioPremiosGanados(data);

    const promedio = data.length >0 ? sumatoria/data.length : 0;
    expect (datos).toEqual(promedio);
  });
});
