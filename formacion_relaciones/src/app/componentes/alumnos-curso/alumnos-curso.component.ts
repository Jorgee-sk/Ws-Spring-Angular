import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-alumnos-curso',
  templateUrl: './alumnos-curso.component.html',
  styleUrls: ['./alumnos-curso.component.css']
})
export class AlumnosCursoComponent implements OnInit {

  curso:string="";
  cursos:Curso[]=[];
  alumnos:Alumno[]=[];

  constructor(private router:Router, private service:FormacionService) {

      this.service.getCursos().subscribe(data=>this.cursos=data);
      
  }

  buscar(){
    this.service.getAlumnosCurso(this.curso).subscribe(data=>this.alumnos=data);
  
  }

  public routingProgramatico(){
  
    this.router.navigate([ '/alumnosCurso'])
  
  }

  ngOnInit() {
  }

}
