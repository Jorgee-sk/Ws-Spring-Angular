import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  url:string = "http://localhost:8080/15_formacion_matriculas/cursosAlumno";
  url2:string = "http://localhost:8080/15_formacion_matriculas/Cursos";
  url3:string = "http://localhost:8080/15_formacion_matriculas/alumnosCurso";
  url4:string = "http://localhost:8080/15_formacion_matriculas/Alumnos";
  url5:string = "http://localhost:8080/15_formacion_matriculas/altaAlumno";
  url6:string = "http://localhost:8080/15_formacion_matriculas/altaCurso";
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

  altaAlumnos(alumno:Alumno){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin','*');

    let json = {alumno:Alumno};
    return this.http.post<Alumno[]>(this.url5,json,{headers:headers});
  
  }

  altaCursos(curso:Curso){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin','*');

    let json = {curso:Curso};
    return this.http.post<Curso[]>(this.url5,json,{headers:headers});
  
  }
  
}
