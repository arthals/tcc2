import { Injectable } from '@angular/core';

import { CreateContextCommand, Context, UpdateContextCommand } from './Contexto.model';
import { AbstractResolveService } from '../shared/utils/abstract-resolve.service';
import { BaseService } from '../shared/BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DialogData } from './create-context/create-context.component';

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
            .get<DialogData>(`${this.api}/${id}`)
            .pipe(map(data => data));
    }
}
@Injectable()
export class ContextoResolveService extends AbstractResolveService<Context> {
    protected loadEntity(entityId: number): Observable<Context> {
        throw new Error('Method not implemented.');
    }

    constructor(private service: ContextoService,
        router: Router) {
        super(router);
        this.paramsProperty = 'ContextoId';
    }

}
