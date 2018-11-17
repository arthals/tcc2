import { CreateTextCommand } from '../texto.model';
import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { TextoService } from '../texto.service';

@Component({
  templateUrl: 'create-text.component.html',
})
export class CreateTextComponent {
  constructor(private fb: FormBuilder,
              private service: TextoService) {}

  public form: FormGroup = this.fb.group({
    palavras: ['', Validators.required]
  });
  public onCreate(): void {
    const textCmd: CreateTextCommand = new CreateTextCommand(this.form.value);
    this.service.post(textCmd)
    .take(1)
    .subscribe(() => {

  });
  }
}
