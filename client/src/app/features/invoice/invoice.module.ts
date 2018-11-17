import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { SharedModule } from '../../shared/shared.module';
import { InvoiceCreatorComponent } from './invoice-creator/invoice-creator.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceSharedModule } from './shared/Invoice-shared.module';
import { ConveyorSharedModule } from '../conveyor/shared/conveyor-shared/conveyor-shared.module';
import { ReceiverSharedModule } from '../receiver/shared/receiver-shared/receiver-shared.module';
import { EmitterSharedModule } from '../emitter/shared/emitter-shared/emitter-shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';

@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
        InvoiceRoutingModule,
        EmitterSharedModule,
        ReceiverSharedModule,
        ConveyorSharedModule,
        InvoiceSharedModule,
        GridModule,
        DropDownsModule,
    ],
    declarations: [
        InvoiceCreatorComponent,
        InvoiceListComponent,
        InvoiceFormComponent,
    ],
    providers: [],
})
export class InvoiceModule{ }
