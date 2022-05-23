import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../todos.model';

@Component({
  selector: 'app-todos-list-item',
  template: `
    <div data-test-content>{{ todo?.content }}</div>
    <mat-chip-list>
      <mat-chip color="primary" selected>{{ todo?.category }}</mat-chip>
    </mat-chip-list>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListItemComponent {
  @Input() todo: Todo | null = null;
}
