import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { Matricula } from 'src/app/model/Matricula';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-consultar-matriculas',
  templateUrl: './consultar-matriculas.component.html',
  styleUrls: ['./consultar-matriculas.component.css'],
})
export class ConsultarMatriculasComponent  {

  matriculas: Matricula[]=[];
  dateIni: string = '';
  dateFin: string = '';

  constructor(private service: FormacionService, private router: Router) {}
  
  ngOnInit(){

  }

  public routingProgramatico(){
    this.router.navigate(['/consultarMatriculas']);
  }

  consultarMatriculas() {
    this.service.buscarMatriculas(this.dateIni, this.dateFin).subscribe((data) => (this.matriculas = data));

  }

  toDate(timestamp: Date){
    let date: Date = new Date(Number(timestamp));  
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
  
}
