import { Injectable } from '@angular/core';

import { CreateTextCommand } from './texto.model';
import { BaseService } from '../shared/BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TextoService extends BaseService {
    private api = 'http://localhost:49454/api/texto/';
    constructor(public httpCliente: HttpClient) {
      super(httpCliente);
    }
    public post(emitter: CreateTextCommand): Observable<boolean> {
        return this.http.post(this.api, emitter).map((response: boolean) => response);
    }

    /* public put(emitter: EmitterUpdateCommand): Observable<boolean> {
        return this.http.put(this.api, emitter).map((response: boolean) => response);
    }

    public get(id: number): Observable<Emitter> {
        return this.http.get(`${this.api}/${id}`).map((response: Emitter) => response);
    }*/
}
