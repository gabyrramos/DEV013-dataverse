import { example, anotherExample } from '../src/dataFunctions.js';



describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});  
