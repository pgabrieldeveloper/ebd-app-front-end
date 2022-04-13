import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClassesComponent} from "./pages/ebd/list-classes/list-classes.component";
import {ListAulasComponent} from "./pages/ebd/list-aulas/list-aulas.component";

const routes: Routes = [
  {path:"classes",component:ListClassesComponent},
  {path:"aulas",component:ListAulasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
