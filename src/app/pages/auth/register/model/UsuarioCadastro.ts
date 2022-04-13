import {PERMISSAO} from "./PERMISSAOENUM";

export interface UsuarioCadastro {
  nome:string;
  email:string;
  password:string;
  permissao: PERMISSAO;

}
