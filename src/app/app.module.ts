import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClassesComponent } from './pages/ebd/list-classes/list-classes.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListAulasComponent } from './pages/ebd/list-aulas/list-aulas.component';
import { ListAlunosComponent } from './pages/ebd/list-alunos/list-alunos.component';
import { ChamadaComponent } from './pages/ebd/chamada/chamada.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClassesComponent,
    HeaderComponent,
    ListAulasComponent,
    ListAlunosComponent,
    ChamadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
