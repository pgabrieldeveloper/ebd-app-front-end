import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClassesComponent} from "./pages/ebd/list-classes/list-classes.component";
import {ListAulasComponent} from "./pages/ebd/list-aulas/list-aulas.component";
import {ListAlunosComponent} from "./pages/ebd/list-alunos/list-alunos.component";
import {ChamadaComponent} from "./pages/ebd/chamada/chamada.component";

const routes: Routes = [
  {path:"classes",component:ListClassesComponent},
  {path:"aulas",component:ListAulasComponent},
  {path:"alunos",component:ListAlunosComponent},
  {path:"chamada",component:ChamadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
