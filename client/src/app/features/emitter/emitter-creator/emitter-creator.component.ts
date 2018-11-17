import { EmitterService } from './../shared/emitter-shared/emitter.service';
import { EmitterRegisterCommand } from './../shared/emitter.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './emitter-creator.component.html',
})
export class EmitterCreatorComponent implements OnInit {

    public title: string;
    public isLoading: boolean;
    public form: FormGroup = this.fb.group({
        fantasyName: ['', Validators.required],
        companyName: ['', Validators.required],
        cnpj: ['', Validators.required],
        stateRegistration: ['', Validators.required],
        municipalRegistration: ['', Validators.required],
        address: this.fb.group({
            street: ['', Validators.required],
            number: ['', Validators.required],
            // Number: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
            neighbourhood: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
        }),
    });

    constructor(private fb: FormBuilder,
                private router: Router,
                private emitterService: EmitterService,
                private route: ActivatedRoute)
                { }

    public ngOnInit(): void {
        this.title = 'Criar Emitente';
        this.isLoading = false;
    }
    public redirect(): void {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    public onCreate(): void {
        const emitterCmd: EmitterRegisterCommand = new EmitterRegisterCommand(this.form.value);
        this.emitterService.post(emitterCmd)
            .take(1)
            .subscribe(() => {
                this.isLoading = true;
                this.redirect();
            });
    }
}
