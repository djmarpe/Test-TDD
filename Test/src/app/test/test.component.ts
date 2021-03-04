import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  coste: number;
  cantidad: number;
  precioDescuento: number;

  constructor() {
    this.coste = 8;
    this.cantidad = 1;
    this.precioDescuento = 0;
  }

  ngOnInit(): void {
  }

  getCoste = () => {
    return this.coste;
  }

  getPrecioDescuento = () => {
    return this.precioDescuento;
  }

  comprarLibros = (cuantos) => {
    this.cantidad = cuantos;
    switch (this.cantidad) {
      case 2:
        this.precioDescuento = (this.coste * 0.05);
        break;
      case 3:
        this.precioDescuento = (this.coste * 0.1);
        break;
      case 4:
        this.precioDescuento = (this.coste * 0.20);
        break;
      case 5:
        this.precioDescuento = (this.coste * 0.25);
        break;
    }
  }

}
