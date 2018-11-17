import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../core/utils';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

export abstract class Service extends BehaviorSubject<GridDataResult> {
    public loading: boolean;

    public BASE_URL: string = 'http://localhost:57274/api/';

    constructor(
        public http: HttpClient,
        protected tableName: string,
    ) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe((x: any) => super.next(x));
    }

    protected fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr: any = `${toODataString(state)}&$count=true`;
        this.loading = true;

        return this.http
            .get(`${this.BASE_URL}${tableName}?${queryStr}`)
            .pipe(
            map((response: any) => (<GridDataResult>{
                data: response.items,
                total: parseInt(response.count, 10),
            })),
            tap(() => this.loading = false),
        );
    }
}

@Injectable()
export class QueryService extends Service {

    constructor(http: HttpClient) { super(http, 'products'); }

    public queryAll(st?: any): Observable<GridDataResult> {
        const state: any = { ...st };
        delete state.skip;
        delete state.take;

        return this.fetch(this.tableName, state);
    }
}

@Injectable()
export class ProductService extends BaseService {

    public BASE_URL: string = 'http://localhost:57274/api/products';

    constructor(http: HttpClient) { super(http); }

    public post(product: Product): Observable<boolean> {
        return this.http.post(`${this.BASE_URL}`, product).map((response: boolean) => response);
    }

    public get(id: number): Observable<Product> {
        return this.http.get(`${this.BASE_URL}/${id}`).map((response: Product) => response);
    }

    public put(product: Product): Observable<boolean> {
      return this.http.put(`${this.BASE_URL}`, product).map((response: boolean) => response);
    }

    public remove(command: any): Observable<boolean> {
        return this.deleteRequestWithBody(`${this.BASE_URL}`, command);
    }
}
