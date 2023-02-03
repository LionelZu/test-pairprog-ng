import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFormAdresseComponent } from './todos-form-adresse.component';

describe('TodosFormAdresseComponent', () => {
  let component: TodosFormAdresseComponent;
  let fixture: ComponentFixture<TodosFormAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosFormAdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFormAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
