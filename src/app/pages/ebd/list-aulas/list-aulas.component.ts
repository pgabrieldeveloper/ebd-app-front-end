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
  private id: number = 0;
  public aulas:Array<Aulas> = [];
  public openModalC:boolean = false;
  public nomeAula:string = "";
  constructor(
    private service: EbdService,
    private toastr: ToastrService,
    private params: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.id = this.params.snapshot.params['id'];
      this.service.pegarTodasAulasClasses(this.id).subscribe({next: res => {
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
    const aula =  new Aulas(0, this.nomeAula, new Date(), this.id)
    console.log(aula)
    this.openModalC = false;
    this.service.cadastrarAula(aula).subscribe({next: res => {
       this.aulas.push(res);
       this.toastr.success("Aula criada com sucesso", "info");
      },
      error: err => {
        this.toastr.error("Erro ao Cadastrar Aula", "error");
      }
    });
  }




}
