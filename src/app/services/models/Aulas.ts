export class Aulas {
   public id :number;
   public nome:string;
   public dtAula:Date;
   public cdClasse:number

  constructor(id:number,nome:string,dtAula:Date,cdClasse:number) {
    this.id = id;
    this.nome = nome;
    this.dtAula = dtAula;
    this.cdClasse = cdClasse;
   }

}
