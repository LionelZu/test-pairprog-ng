import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/share/share.module';
import { TodosAddItemComponent } from './todos-add-item/todos-add-item.component';
import { TodosFormAdresseComponent } from './todos-form/todos-form-adresse/todos-form-adresse.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
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
    TodosFormComponent,
    TodosFormAdresseComponent,
  ],
  imports: [CommonModule, ShareModule],
  exports: [TodosListComponent, TodosSidebarComponent, TodosFormComponent],
})
export class TodosModule {}
