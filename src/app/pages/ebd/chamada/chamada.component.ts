import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.scss']
})
export class ChamadaComponent implements OnInit {

  public alunos : Array<{nome:string, ft:string}> = [
    {nome:"Debora",ft:"https://aluno.seduc.ce.gov.br/assets/icons/icon-512x512.png"},
    {nome:"Rebeca",ft:"https://aluno.seduc.ce.gov.br/assets/icons/icon-512x512.png"},
    {nome:"Gabriel",ft:"https://aluno.seduc.ce.gov.br/assets/icons/icon-512x512.png"}];

  constructor() { }

  ngOnInit(): void {
  }

}
