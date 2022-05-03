import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCursoComponent } from './alta-curso.component';

describe('AltaCursoComponent', () => {
  let component: AltaCursoComponent;
  let fixture: ComponentFixture<AltaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
