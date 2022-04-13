import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-aulas',
  templateUrl: './list-aulas.component.html',
  styleUrls: ['./list-aulas.component.scss'],

})
export class ListAulasComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  teste(){
    this.toastr.success("Hello my friend", "teste");
  }




}
