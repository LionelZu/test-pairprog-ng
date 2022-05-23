import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ShareModule } from 'src/share/share.module';

import { TodosSidebarComponent } from './todos-sidebar.component';

describe('TodosSidebarComponent', () => {
  let spectator: Spectator<TodosSidebarComponent>;

  const createComponent = createComponentFactory({
    component: TodosSidebarComponent,
    imports: [ShareModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
