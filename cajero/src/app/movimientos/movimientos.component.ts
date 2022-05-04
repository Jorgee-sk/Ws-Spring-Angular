import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../model/Cuenta';
import { Movimiento } from '../model/Movimiento';
import { CajeroServiceService } from '../services/cajero-service.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  start: string = ""
  end: string = ""

  movimientoList: Movimiento[]=[];
  cuenta: Cuenta = null;

  constructor(private service: CajeroServiceService) {

  
   
  }

  ngOnInit() {
    this.service.getCuenta().subscribe(data => this.cuenta = data);
  }

  buscarMovimientos() {
    this.service.getMovimientos(this.start, this.end).subscribe(data => this.movimientoList = data);
  }

  toDate(timestamp: Date){
    let date: Date = new Date(Number(timestamp));  
    return date.getUTCFullYear() +
    '-' + ('0' + date.getUTCMonth()).slice(-2) +
    '-' + ('0' + date.getUTCDate()).slice(-2) + 
    ' ' + ('0' + date.getUTCHours()).slice(-2) +
    ':' + ('0' + date.getUTCMinutes()).slice(-2) +
    ':' + ('0' + date.getUTCSeconds()).slice(-2)
  }
}
