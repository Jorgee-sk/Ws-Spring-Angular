import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCursoComponent } from './alumnos-curso.component';

describe('AlumnosCursoComponent', () => {
  let component: AlumnosCursoComponent;
  let fixture: ComponentFixture<AlumnosCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
