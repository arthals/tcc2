import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ContextoService } from '../Contexto.service';
import { CreateContextCommand } from '../contexto.model';

@Component({
  templateUrl: 'create-Context.component.html',
})

export class CreateConContextComponent {
  constructor(private fb: FormBuilder,
              private service: ContextoService) {}

  public form: FormGroup = this.fb.group({
    palavras: ['', Validators.required]
  });
  public onCreate(): void {
    const ContextCmd: CreateContextCommand = new CreateContextCommand(this.form.value);
    this.service.post(ContextCmd)
    .take(1)
    .subscribe(() => {
    });
  }
}
