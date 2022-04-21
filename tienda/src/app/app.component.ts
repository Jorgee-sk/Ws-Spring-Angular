import { Component } from '@angular/core';
import { Producto } from './model/Producto';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  seccion:string="";
  productos:Producto[]=[];

  constructor(private service:ProductosService){

  }

  busqueda(){
   
    this.service.buscar(this.seccion).subscribe(data=>this.productos=data);
  
  }
}
