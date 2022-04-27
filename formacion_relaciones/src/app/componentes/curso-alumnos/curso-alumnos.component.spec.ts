import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAlumnosComponent } from './curso-alumnos.component';

describe('CursoAlumnosComponent', () => {
  let component: CursoAlumnosComponent;
  let fixture: ComponentFixture<CursoAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
