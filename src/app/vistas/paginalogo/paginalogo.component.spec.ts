import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginalogoComponent } from './paginalogo.component';

describe('PaginalogoComponent', () => {
  let component: PaginalogoComponent;
  let fixture: ComponentFixture<PaginalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
