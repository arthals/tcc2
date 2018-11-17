import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { EnumValues } from 'enum-values';
import { FreightResponsibility } from '../shared/conveyor.model';

@Component({
    selector: 'ndd-conveyor-form',
    templateUrl: './conveyor-form.component.html',
})

export class ConveyorFormComponent{

    @Input() public formModel: FormGroup;
    public responsibilityList: any[];

    public formEnterprise: FormGroup = this.fb.group({
        companyName: ['', Validators.required],
        cnpj: ['', Validators.required],
    });
    public formIndividual: FormGroup = this.fb.group({
        name: ['', Validators.required],
        cpf: ['', Validators.required],
    });
    constructor(private fb: FormBuilder) {
        this.responsibilityList = EnumValues.getNamesAndValues(FreightResponsibility);
    }
}
