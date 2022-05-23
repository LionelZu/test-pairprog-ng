import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosProgressionsComponent } from './todos-progressions.component';

describe('TodosProgressionsComponent', () => {
  let component: TodosProgressionsComponent;
  let fixture: ComponentFixture<TodosProgressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosProgressionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosProgressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
