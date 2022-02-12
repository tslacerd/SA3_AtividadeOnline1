import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag003Component } from './pag003.component';

describe('Pag003Component', () => {
  let component: Pag003Component;
  let fixture: ComponentFixture<Pag003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
