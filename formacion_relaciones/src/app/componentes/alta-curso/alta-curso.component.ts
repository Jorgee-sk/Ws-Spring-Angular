import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/model/Curso';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-alta-curso',
  templateUrl: './alta-curso.component.html',
  styleUrls: ['./alta-curso.component.css']
})
export class AltaCursoComponent implements OnInit {

  cursos:Curso[]=[];
  curso = new Curso();

  constructor(private router:Router, private service:FormacionService) {
      
  }

  alta(){
    
    this.service.altaCursos(this.curso).subscribe(data=>this.cursos=data);
         
  }

  public routingProgramatico(){
  
    this.router.navigate([ '/altaCurso'])
  
  }

  ngOnInit() {
  }

}
