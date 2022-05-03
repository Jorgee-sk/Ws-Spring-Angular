import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosCursoComponent } from './componentes/alumnos-curso/alumnos-curso.component';
import { ConsultarMatriculasComponent } from './componentes/consultar-matriculas/consultar-matriculas.component';
import { CursoAlumnosComponent } from './componentes/curso-alumnos/curso-alumnos.component';

const routes: Routes = [ 
  {
    path : 'alumnosCurso', //cuando definimos el 'path' no puede empezar por '/'
    component : AlumnosCursoComponent
  },
  {
    path : 'cursosAlumno', //cuando definimos el 'path' no puede empezar por '/'
    component : CursoAlumnosComponent
  },
  {
    path: 'consultarMatriculas',
    component: ConsultarMatriculasComponent
  }
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
