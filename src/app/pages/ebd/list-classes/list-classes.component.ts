import { Component, OnInit } from '@angular/core';
import {EbdService} from "../../../services/ebd.service";
import Classes from "../../../services/models/Classes";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss']
})
export class ListClassesComponent implements OnInit {

  classes: Array<Classes> = [];

  constructor(
    private service:EbdService,
    private toastr: ToastrService
              ) { }

  ngOnInit(): void {
    this.service.pegarTodasAsClasses().subscribe({next:res => {
      console.log(res);
      this.classes = res
      }, error:err => {
      this.toastr.error("Não foi possivel carregar as classes" + err, "Error");
    }
    });

  }

}
