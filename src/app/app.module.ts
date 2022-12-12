import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { CoreModule } from 'src/core/core.module';
import { environment } from 'src/environments/environment';
import { ShareModule } from 'src/share/share.module';
import { TodosModule } from 'src/todos/todos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ShareModule,
    TodosModule,
    CoreModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    ...environment.plugins,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
