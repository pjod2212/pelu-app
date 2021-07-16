import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class ServicioService extends AbstractService {

    constructor(public http: HttpClient) {
      super(http);
    }
  
    buscarServicios(): Observable<any> {
      return this.getWithObserve(this.EP_SERVICIOS);
    }  

}