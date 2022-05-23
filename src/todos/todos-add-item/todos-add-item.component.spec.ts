import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAddItemComponent } from './todos-add-item.component';

describe('TodosAddItemComponent', () => {
  let component: TodosAddItemComponent;
  let fixture: ComponentFixture<TodosAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
