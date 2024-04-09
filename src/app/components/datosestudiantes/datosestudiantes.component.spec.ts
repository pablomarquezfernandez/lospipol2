import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosestudiantesComponent } from './datosestudiantes.component';

describe('DatosestudiantesComponent', () => {
  let component: DatosestudiantesComponent;
  let fixture: ComponentFixture<DatosestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosestudiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
