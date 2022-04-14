import { Component, OnInit } from '@angular/core';
import {EbdService} from "../../../services/ebd.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Aluno} from "../../../services/models/Aluno";

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.scss']
})
export class ChamadaComponent implements OnInit {

  public alunos : Array<Aluno> = [];

  constructor(
    private service: EbdService,
    private params: ActivatedRoute,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.params.snapshot.params['id'];
    this.service.pegarTodosAlunosClasse(id).subscribe({next: res => {
      this.alunos = res;
      }, error: err => {
      this.toast.error("Erro ao listar os alunos para a chamada", "error");
      }});
  }

}
