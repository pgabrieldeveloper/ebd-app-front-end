import { Component, OnInit } from '@angular/core';
import {EbdService} from "../../../services/ebd.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Aluno} from "../../../services/models/Aluno";
import {PresencaRequest} from "../../../services/models/PresencaRequest";
import {ChamadaRequest} from "../../../services/models/AlunoChamadaRequest";

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.scss']
})
export class ChamadaComponent implements OnInit {

  public alunos : Array<Aluno> = [];
  public listaPresenca : Array<PresencaRequest> = [];
  public chamada : ChamadaRequest = new ChamadaRequest();
  constructor(
    private service: EbdService,
    private params: ActivatedRoute,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.params.snapshot.params['id'];
    this.chamada.cdAula = id;
    this.service.pegarTodosAlunosClasse(id).subscribe({next: res => {
      this.alunos = res;
      this.alunos.forEach( aluno => {
        const alunoPresenca = new PresencaRequest();
        alunoPresenca.idAluno = aluno.id;
        this.listaPresenca.push(alunoPresenca);
      })
      }, error: err => {
      this.toast.error("Erro ao listar os alunos para a chamada", "error");
      }});
  }

  realizarChamada(){
      this.chamada.listaPresenca = this.listaPresenca;
      this.service.realiarChamada(this.chamada).subscribe({next: res => {
          this.toast.success("Chamada Realizada com Sucesso", "feito!")
        }, error: err => {
          this.toast.error("Erro ao realizar chamada", "error");
        }});
      console.log(this.chamada);
  }

}
