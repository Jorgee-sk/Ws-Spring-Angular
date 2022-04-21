import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url:string = "http://localhost:8080/07_alumnos_bbdd/Buscador";

  url2:string = "http://localhost:8080/07_alumnos_bbdd/Cursos";

  constructor(private http:HttpClient) { }

  buscar(curso:string){
  
    return this.http.get<Alumno[]>(this.url,{params:{curso:curso}})
  
  }

  getCursos(){
      
    return this.http.get<string[]>(this.url2)
  
  }
}
