import { Injectable } from '@angular/core';

import { CreateContextCommand, Context, UpdateContextCommand } from './Contexto.model';
import { AbstractResolveService } from '../shared/utils/abstract-resolve.service';
import { BaseService } from '../shared/BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class ContextoService extends BaseService {
    private api = 'http://localhost:49454/api/Contexto/';
    constructor(public httpCliente: HttpClient) {
      super(httpCliente);
    }
    public post(emitter: CreateContextCommand): Observable<boolean> {
        return this.http.post(this.api, emitter).map((response: boolean) => response);
    }

    public put(emitter: UpdateContextCommand): Observable<boolean> {
        return this.http.put(this.api, emitter).map((response: boolean) => response);
    }
    public get(id: number) {
        return this.http
            .get<Context>(`${this.api}/${id}`)
            .pipe(map(data => data));
    }
}
@Injectable()
export class ContextoResolveService extends AbstractResolveService<Context> {

    constructor(private service: ContextoService,
        router: Router) {
        super(router);
        this.paramsProperty = 'ContextoId';
    }

    public loadEntity(ContextoId: number): Observable<Context> {
        return this.service
            .get(ContextoId)
            .take(1)
            .do((contexto: Context) => {
            });
    }
}
