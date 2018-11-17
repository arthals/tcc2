import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State, toODataString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ICoreConfig, CORE_CONFIG_TOKEN } from '../../../core/core.config';
import { Invoice, InvoiceDeleteCommand, InvoiceRegisterCommand } from './invoice.model';
import { BaseService } from '../../../core/utils';
import { AbstractResolveService } from '../../../core/utils/abstract-resolve.service';
import { NDDBreadcrumbService } from '../../../shared/ndd-ng-breadcrumb';
import { Router } from '@angular/router';

@Injectable()
export class InvoiceGridService extends BehaviorSubject<GridDataResult> {
    public loading: boolean;

    constructor(private httpCliente: HttpClient,
        @Inject(CORE_CONFIG_TOKEN) private config: ICoreConfig) {
        super(null);
    }
    public query(state: State): void {
        this.fetch(state).subscribe((result: GridDataResult) => super.next(result));
    }
    protected fetch(state: any): Observable<GridDataResult> {
        const queryStr: string = `${toODataString(state)}&$count=true`;
        this.loading = true;

        return this.httpCliente
            .get(`${this.config.apiEndpoint}api/invoices?${queryStr}`)
            .map((response: any) => (<GridDataResult>{
                data: response.items,
                total: parseInt(response.count, 10),
            }))
            .do(() => this.loading = false);
    }
}

@Injectable()
export class InvoiceService extends BaseService {
    private api: string;

    constructor(public httpCliente: HttpClient,
        @Inject(CORE_CONFIG_TOKEN) private config: ICoreConfig) {
        super(httpCliente);
        this.api = `${this.config.apiEndpoint}api/invoices`;
    }

    public post(command: InvoiceRegisterCommand): Observable<boolean> {
        return this.http.post(this.api, command).map((response: boolean) => response);
    }

    public put(invoiceIssued: Invoice): Observable<boolean> {
        return this.http.put(this.api, invoiceIssued).map((response: boolean) => response);
    }

    public get(id: number): Observable<Invoice> {
        return this.http.get(`${this.api}/${id}`).map((response: Invoice) => response);
    }

    public delete(command: InvoiceDeleteCommand): Observable<boolean> {
        return this.deleteRequestWithBody(`${this.api}`, command);
    }
}
@Injectable()
export class InvoiceResolveService extends AbstractResolveService<Invoice> {

    constructor(private service: InvoiceService,
        private breadcrumbService: NDDBreadcrumbService,
        router: Router) {
        super(router);
        this.paramsProperty = 'invoiceIssuedId';
    }
    protected loadEntity(productId: number): Observable<Invoice> {
        return this.service
            .get(productId)
            .take(1)
            .do((invoiceIssued: Invoice) => {
                this.breadcrumbService.setMetadata({
                    id: 'invoice issued',
                    label: invoiceIssued.natureOperation,
                    sizeLimit: true,
                });
            });
    }
}
