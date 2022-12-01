import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/share/share.module';
import { TodosAddItemComponent } from './todos-add-item/todos-add-item.component';
import { TodosListItemComponent } from './todos-list-item/todos-list-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosProgressionsComponent } from './todos-progressions/todos-progressions.component';
import { TodosSidebarComponent } from './todos-sidebar/todos-sidebar.component';

@NgModule({
  declarations: [
    TodosListComponent,
    TodosListItemComponent,
    TodosAddItemComponent,
    TodosSidebarComponent,
    TodosProgressionsComponent,
  ],
  imports: [CommonModule, ShareModule, HttpClientModule],
  exports: [TodosListComponent, TodosSidebarComponent],
})
export class TodosModule {}
