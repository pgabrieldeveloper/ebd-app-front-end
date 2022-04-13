import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClassesComponent } from './pages/ebd/list-classes/list-classes.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListAulasComponent } from './pages/ebd/list-aulas/list-aulas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClassesComponent,
    HeaderComponent,
    ListAulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
