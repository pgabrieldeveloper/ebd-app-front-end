import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsuarioCadastro} from "./model/UsuarioCadastro";
import {PERMISSAO} from "./model/PERMISSAOENUM";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public cadastroForm :FormGroup = this.formbuilder.group({
    email:[''],
    nome:[''],
    password:[''],
    permissoes:['0'],
  })

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

  }

  public cadastar(){
    const dados = this.cadastroForm;
    const user: UsuarioCadastro =
      {
        email:dados.value.email,
        password:dados.value.password,
        nome:dados.value.nome,
        permissao:(dados.value.permissoes === '1' ?PERMISSAO.ADM :PERMISSAO.AJUDANTE)
      };
    alert(JSON.stringify(user));

  }

}




