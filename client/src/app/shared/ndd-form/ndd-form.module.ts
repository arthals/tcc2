import { NgModule } from '@angular/core';

import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { FreightResponsibilityPipe } from './freightResponsibility.pipe';
@NgModule({
    declarations:[
        CpfCnpjPipe,
        FreightResponsibilityPipe,
    ],
    exports: [
        CpfCnpjPipe,
        FreightResponsibilityPipe,
    ],
})
export class NddFormModule {}
