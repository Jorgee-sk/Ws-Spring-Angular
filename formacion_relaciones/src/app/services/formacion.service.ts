import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  url:string = "http://localhost:8080/11_formacion_relac/cursosAlumno";
  url2:string = "http://localhost:8080/11_formacion_relac/Cursos";
  url3:string = "http://localhost:8080/11_formacion_relac/alumnosCurso";
  url4:string = "http://localhost:8080/11_formacion_relac/Alumnos";

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

  
}
