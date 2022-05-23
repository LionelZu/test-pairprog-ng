import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { ShareModule } from 'src/share/share.module';
import { TodosListItemComponent } from './todos-list-item/todos-list-item.component';

@NgModule({
  declarations: [TodosListComponent, TodosListItemComponent],
  imports: [CommonModule, ShareModule],
  exports: [TodosListComponent],
})
export class TodosModule {}
