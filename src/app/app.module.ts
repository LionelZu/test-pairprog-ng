import { NgModule } from '@angular/core';

import { CoreModule } from 'src/core/core.module';
import { ShareModule } from 'src/share/share.module';
import { TodosModule } from 'src/todos/todos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ShareModule, TodosModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
