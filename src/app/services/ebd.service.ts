import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Classes from "./models/Classes";
import {Aulas} from "./models/Aulas";

@Injectable({
  providedIn: 'root'
})
export class EbdService {
  private baseURL;
  constructor(private http: HttpClient) {
    this.baseURL = "http://localhost:8080/api";
  }

  pegarTodasAsClasses(): Observable<Array<Classes>>{
    return this.http.get<Array<Classes>>(`${this.baseURL}/classe/classe-alunos`).pipe(
      res => res,
      err => err,
    );
  }
  pegarTodasAulasClasses(cdClasse:number): Observable<Array<Aulas>>{
    return this.http.get<Array<Aulas>>(`${this.baseURL}/aula/classe/${cdClasse}`,).pipe(
      res => res,
      err => err,
    );
  }

  cadastrarAula(aula:Aulas):  Observable<Aulas> {
    return this.http.post<Aulas>(`${this.baseURL}/aula`,aula).pipe(
      res => res,
      err => err,
    );
  }



}
