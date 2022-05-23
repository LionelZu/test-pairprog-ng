import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from 'src/share/share.module';
import { TodosModule } from 'src/todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ShareModule, TodosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
