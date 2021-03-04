import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  coste: number;
  cantidad: number;

  constructor() {
    this.coste = 8;
    this.cantidad = 1;
  }

  ngOnInit(): void {
  }

  getCoste = () =>{
    return this.coste;
  }

}
