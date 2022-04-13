import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClassesComponent} from "./pages/ebd/list-classes/list-classes.component";

const routes: Routes = [
  {path:"classes",component:ListClassesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
