import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('Cada libro tiene que tener un coste inicial de 8€', () => {
  let component: TestComponent;

  it('Si creo un nuevo libro, el precio debe de dar 8€', () => {
    component = new TestComponent;
    expect(component.getCoste()).toBe(8);
  });

});

describe('Si se adquieren dos libros distintos se aplica un 5% de descuento en ambos', () =>{
  let component; TestComponent;

  it('Si la cantidad de libros es > 1, se aplica un 5% de descuento', () => {
    component = new TestComponent;
  });

});
