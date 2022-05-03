import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {

  
  alumnos:Alumno[]=[];
  alumno = new Alumno();

  constructor(private router:Router, private service:FormacionService) {
      
  }

  alta(){
    
    this.service.altaAlumnos(this.alumno).subscribe(data=>this.alumnos=data);
         
  }

  public routingProgramatico(){
  
    this.router.navigate([ '/altaAlumno'])
  
  }

  ngOnInit() {
  }


}
