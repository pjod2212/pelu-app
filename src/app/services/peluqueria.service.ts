import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class PeluqueriaService extends AbstractService {

    constructor(public http: HttpClient) {
      super(http);
    }
  
    buscarPeluquerias(): Observable<any> {
      return this.getWithObserve(this.EP_PELUQUERIA);
    }  

}