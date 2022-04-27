import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-curso-alumnos',
  templateUrl: './curso-alumnos.component.html',
  styleUrls: ['./curso-alumnos.component.css']
})
export class CursoAlumnosComponent implements OnInit {

  alumno:string="";
  cursos:Curso[]=[];
  alumnos:Alumno[]=[];

  constructor(private router:Router, private service:FormacionService) {
      
    this.service.getAlumnos().subscribe(data=>this.alumnos=data);
  
  }

  buscar(){
    this.service.getCursosAlumno(this.alumno).subscribe(data=>this.cursos=data);
  
  }
  

  public routingProgramatico(){
  
    this.router.navigate([ '/cursosAlumno'])
  
  }

 

  ngOnInit() {
  }

}
