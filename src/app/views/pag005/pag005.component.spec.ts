import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag005Component } from './pag005.component';

describe('Pag005Component', () => {
  let component: Pag005Component;
  let fixture: ComponentFixture<Pag005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
