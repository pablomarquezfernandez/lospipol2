import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarestudianteComponent } from './insertarestudiante.component';

describe('InsertarestudianteComponent', () => {
  let component: InsertarestudianteComponent;
  let fixture: ComponentFixture<InsertarestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarestudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
