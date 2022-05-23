import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ShareModule } from 'src/share/share.module';
import { TodoProgress } from '../todos.model';

import { TodosProgressionsComponent } from './todos-progressions.component';

describe('TodosProgressionsComponent', () => {
  let spectator: Spectator<TodosProgressionsComponent>;
  const progress: TodoProgress = { total: 10, done: 3 };

  const createComponent = createComponentFactory({
    component: TodosProgressionsComponent,
    imports: [ShareModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.setInput('progress', progress);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should compute progress', () => {
    expect(spectator.query('mat-progress-bar')).toHaveAttribute(
      'ng-reflect-value',
      '30'
    );
  });
});
