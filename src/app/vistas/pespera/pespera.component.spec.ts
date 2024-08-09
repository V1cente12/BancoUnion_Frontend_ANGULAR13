import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesperaComponent } from './pespera.component';

describe('PesperaComponent', () => {
  let component: PesperaComponent;
  let fixture: ComponentFixture<PesperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
