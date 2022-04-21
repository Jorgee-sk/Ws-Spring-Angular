import { Component } from '@angular/core';
import { Alumno } from './model/Alumno';
import { AlumnosService } from './service/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alumnos';
  curso:string="";
  cursos:string[]=[];
  alumnos:Alumno[]=[];

  constructor(private service:AlumnosService){
    this.service.getCursos().subscribe(data=>this.cursos=data);
  }

  busqueda(){
    this.service.buscar(this.curso).subscribe(data=>this.alumnos=data);
  }

}
