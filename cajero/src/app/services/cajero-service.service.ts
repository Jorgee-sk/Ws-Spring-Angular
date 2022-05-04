import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from '../model/Cuenta';
import { Movimiento } from '../model/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class CajeroServiceService {

  constructor(private http:HttpClient) { }


  getMovimientos(start: string, end: string){
    return this.http.get<Movimiento[]>('Movimientos',{params: {start: start, end: end}});
  }

  getCuenta(){
    return this.http.get<Cuenta>('Saldo');
  }
}
