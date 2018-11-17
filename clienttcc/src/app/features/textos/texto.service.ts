import { Injectable } from '@angular/core';

import { CreateTextCommand, Texto } from './texto.model';
import { AbstractResolveService } from '../shared/utils/abstract-resolve.service';
import { BaseService } from '../shared/BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

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
    } */

    public get(id: number): Observable<Texto> {
        return this.http.get(`${this.api}/${id}`).map((response: Texto) => response);
    }
}
@Injectable()
export class TextoResolveService extends AbstractResolveService<Texto> {

    constructor(private service: TextoService,
        router: Router) {
        super(router);
        this.paramsProperty = 'emitterId';
    }

    protected loadEntity(emitterId: number): Observable<Texto> {
        return this.service
            .get(emitterId)
            .take(1)
            .do((emitter: Texto) => {
            });
    }
}
