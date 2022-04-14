export class Aluno {
  public id: number;
  public nome: string;
  public idade: number

  constructor(id:number, nome:string, idade:number) {
    this.idade = idade;
    this.id = id;
    this.nome = nome;
  }
}
