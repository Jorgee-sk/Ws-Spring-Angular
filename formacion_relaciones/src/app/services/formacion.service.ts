import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';
import { Matricula } from '../model/Matricula';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  url:string = "http://localhost:8080/15_formacion_matriculas/cursosAlumno";
  url2:string = "http://localhost:8080/15_formacion_matriculas/Cursos";
  url3:string = "http://localhost:8080/15_formacion_matriculas/alumnosCurso";
  url4:string = "http://localhost:8080/15_formacion_matriculas/Alumnos";
  url5:string = "http://localhost:8080/15_formacion_matriculas/consultarMatriculas"
  
  constructor(private http:HttpClient) { }

  getCursosAlumno(usuario:string){
    
    return this.http.get<Curso[]>(this.url,{params:{"usuario":usuario}})
  
  }
  getCursos(){
      
    return this.http.get<Curso[]>(this.url2)
  
  }

  getAlumnosCurso(nombre:string){
  
    return this.http.get<Alumno[]>(this.url3,{params:{"nombre":nombre}})
  
  }

  getAlumnos(){
    return this.http.get<Alumno[]>(this.url4)
  }

  buscarMatriculas(dateIni:string,dateFin:string){

    return this.http.get<Matricula[]>(this.url5,{params:{"fechaIni":dateIni, "fechaFin":dateFin},});

  }

  
}
