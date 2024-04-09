import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosclaseComponent } from './datosclase.component';

describe('DatosclaseComponent', () => {
  let component: DatosclaseComponent;
  let fixture: ComponentFixture<DatosclaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosclaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosclaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
