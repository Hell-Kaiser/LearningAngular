import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { environment } from '../../environments/environment'
import { Colaboradores } from '../../app/modelos/colaboradores.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public url:string=environment.urlApi;


  constructor(public http:HttpClient) { }

  public getData():Observable<Colaboradores>{
    return this.http.get<Colaboradores>(this.url)
  }
}
