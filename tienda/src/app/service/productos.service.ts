import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string = "http://localhost:8080/08_tienda_persistencia/Buscador";

  constructor(private http:HttpClient) { }

  buscar(seccion:string){
  
    return this.http.get<Producto[]>(this.url,{params:{seccion:seccion}})
  
  }
}
