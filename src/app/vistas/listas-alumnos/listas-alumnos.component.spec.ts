import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAlumnosComponent } from './listas-alumnos.component';

describe('ListasAlumnosComponent', () => {
  let component: ListasAlumnosComponent;
  let fixture: ComponentFixture<ListasAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
