import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSidebarComponent } from './todos-sidebar.component';

describe('TodosSidebarComponent', () => {
  let component: TodosSidebarComponent;
  let fixture: ComponentFixture<TodosSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
