import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { EnlacesAppComponent } from './componentes/enlaces-app/enlaces-app.component';
import { AlumnosCursoComponent } from './componentes/alumnos-curso/alumnos-curso.component';
import { CursoAlumnosComponent } from './componentes/curso-alumnos/curso-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EnlacesAppComponent,
    AlumnosCursoComponent,
    CursoAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
