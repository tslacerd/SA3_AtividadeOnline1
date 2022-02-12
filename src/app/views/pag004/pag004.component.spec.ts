import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag004Component } from './pag004.component';

describe('Pag004Component', () => {
  let component: Pag004Component;
  let fixture: ComponentFixture<Pag004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
