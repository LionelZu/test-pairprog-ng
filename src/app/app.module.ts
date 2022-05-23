import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from 'src/share/share.module';
import { TodosModule } from 'src/todos/todos.module';
import { CoreModule } from 'src/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ShareModule, TodosModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
