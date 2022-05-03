import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './componentes/alta-alumno/alta-alumno.component';
import { AltaCursoComponent } from './componentes/alta-curso/alta-curso.component';
import { AlumnosCursoComponent } from './componentes/alumnos-curso/alumnos-curso.component';
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
    path : 'altaAlumno', //cuando definimos el 'path' no puede empezar por '/'
    component : AltaAlumnoComponent
  },
  {
    path : 'altaCurso', //cuando definimos el 'path' no puede empezar por '/'
    component : AltaCursoComponent
  },
  {
    path : 'matricular', //cuando definimos el 'path' no puede empezar por '/'
    component : CursoAlumnosComponent
  },
  {
    path : 'fechasCursos', //cuando definimos el 'path' no puede empezar por '/'
    component : CursoAlumnosComponent
  },
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
