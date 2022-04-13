import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Classes from "./models/Classes";

@Injectable({
  providedIn: 'root'
})
export class EbdService {
  private baseURL;
  constructor(private http: HttpClient) {
    this.baseURL = "http://localhost:8080/api";
  }

  pegarTodasAsClasses(): Observable<Array<Classes>>{
    console.log(`${this.baseURL}/classe`)
    return this.http.get<Array<Classes>>(`${this.baseURL}/classe/classe-alunos`).pipe(
      res => res,
      err => err,
    );
  }

}
