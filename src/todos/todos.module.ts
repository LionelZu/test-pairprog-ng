import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { ShareModule } from 'src/share/share.module';
import { TodosListItemComponent } from './todos-list-item/todos-list-item.component';
import { TodosAddItemComponent } from './todos-add-item/todos-add-item.component';
import { TodosSidebarComponent } from './todos-sidebar/todos-sidebar.component';
import { TodosProgressionsComponent } from './todos-progressions/todos-progressions.component';

@NgModule({
  declarations: [
    TodosListComponent,
    TodosListItemComponent,
    TodosAddItemComponent,
    TodosSidebarComponent,
    TodosProgressionsComponent,
  ],
  imports: [CommonModule, ShareModule],
  exports: [TodosListComponent, TodosSidebarComponent],
})
export class TodosModule {}
