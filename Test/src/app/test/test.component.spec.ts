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
  let component: TestComponent;

  it('Si la cantidad de libros es > 1, se aplica un 5% de descuento', () => {
    component = new TestComponent;
    component.comprarLibros(2);
    expect(component.getPrecioDescuento()).toBe(7.6);
  });

});

describe('Si se adquieren 3 libros distintos se aplica un 10% de descuento en ambos', () =>{
  let component: TestComponent;

  it('Si la cantidad de libros es > 2, se aplica un 10% de descuento', () => {
    component = new TestComponent;
    component.comprarLibros(3);
    expect(component.getPrecioDescuento()).toBe(7.2);
  });

});

describe('Si se adquieren 4 libros distintos se aplica un 20% de descuento en ambos', () =>{
  let component: TestComponent;

  it('Si la cantidad de libros es > 3, se aplica un 20% de descuento', () => {
    component = new TestComponent;
    component.comprarLibros(4);
    expect(component.getPrecioDescuento()).toBe(6.4);
  });

});

describe('Si se adquieren 5 libros distintos se aplica un 25% de descuento en ambos', () =>{
  let component: TestComponent;

  it('Si la cantidad de libros es 5, se aplica un 25% de descuento', () => {
    component = new TestComponent;
    component.comprarLibros(5);
    expect(component.getPrecioDescuento()).toBe(6);
  });

});
