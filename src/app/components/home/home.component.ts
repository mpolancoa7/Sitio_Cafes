import { Component, OnInit } from '@angular/core';

//importar servicio
import { CafesService } from 'src/app/cafes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //crear arreglo
  productosList:any[]=[];

  constructor(private productosService:CafesService){}

  // Validar si funciona por consola
  /*ngOnInit(): void {
    this.productosService.getProductos()
    .subscribe((response:any[])=>console.log(response));
  } */

  ngOnInit(): void {
    this.productosService.getProductos()
    //pasa el response al array
    .subscribe((response:any[])=>this.productosList=response);
  }
}
