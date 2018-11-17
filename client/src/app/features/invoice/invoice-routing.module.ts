import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceCreatorComponent } from './invoice-creator/invoice-creator.component';

const invoiceIssuedRoutes: Routes = [
    {
        path: '',
        component: InvoiceListComponent,
    },
    {
        path: 'create',
        component: InvoiceCreatorComponent,
        data: {
            breadcrumbOptions: {
                breadcrumbLabel: 'Criar Nota Fiscal',
            },
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(invoiceIssuedRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class InvoiceRoutingModule {

}
