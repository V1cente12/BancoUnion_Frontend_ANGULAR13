import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariofiltrarComponent } from './formulariofiltrar.component';

describe('FormulariofiltrarComponent', () => {
  let component: FormulariofiltrarComponent;
  let fixture: ComponentFixture<FormulariofiltrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariofiltrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariofiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
