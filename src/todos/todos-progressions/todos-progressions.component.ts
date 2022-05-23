import { Component, Input, OnInit } from '@angular/core';
import { TodoProgress } from '../todos.model';

@Component({
  selector: 'app-todos-progressions',
  template: `<h3>Progression globale</h3>
    <mat-progress-bar
      mode="determinate"
      [value]="progressPercent"
    ></mat-progress-bar> `,
  styles: [],
})
export class TodosProgressionsComponent {
  @Input() progress: TodoProgress | null = null;

  get progressPercent(): number {
    if (!this.progress || this.progress?.total === 0) {
      return 100;
    }
    return (this.progress.done / this.progress.total) * 100;
  }
}
