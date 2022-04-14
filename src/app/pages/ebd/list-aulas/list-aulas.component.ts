import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {EbdService} from "../../../services/ebd.service";
import {ActivatedRoute} from "@angular/router";
import {Aulas} from "../../../services/models/Aulas";

@Component({
  selector: 'app-list-aulas',
  templateUrl: './list-aulas.component.html',
  styleUrls: ['./list-aulas.component.scss'],

})
export class ListAulasComponent implements OnInit {
  public aulas:Array<Aulas> = [];
  public openModalC:boolean = false;
  constructor(
    private service: EbdService,
    private toastr: ToastrService,
    private params: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.params.snapshot.params['id'];
    this.service.pegarTodasAulasClasses(id).subscribe({next: res => {
      this.aulas = res;
      },
      error: err => {
      this.toastr.error("Erro ao carregas as aulas dessa classe", "error");
      }
    });
    console.log(this.aulas);
  }
  openModal(){
    this.openModalC = true;
  }

  cadastrarAula(){
    this.toastr.success("Aula criada com sucesso", "info");
    this.openModalC = false;
  }




}
