import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospipolComponent } from './datospipol.component';

describe('DatospipolComponent', () => {
  let component: DatospipolComponent;
  let fixture: ComponentFixture<DatospipolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatospipolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatospipolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
