import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesAppComponent } from './enlaces-app.component';

describe('EnlacesAppComponent', () => {
  let component: EnlacesAppComponent;
  let fixture: ComponentFixture<EnlacesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
