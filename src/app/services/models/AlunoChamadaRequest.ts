import {PresencaRequest} from "./PresencaRequest";

export class ChamadaRequest{
  public cdAula: number = 0;
  public oferta: number = 0.0;
  public listaPresenca: Array<PresencaRequest> = [];
  constructor() {
  }

}
