import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMatchComponentComponent } from './my-match.component/my-match.component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMatchComponentComponent
  ],
  imports: [
    NgTournamentTreeModule,
    NgttSingleEliminationTree,
    NgttDoubleEliminationTree,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
