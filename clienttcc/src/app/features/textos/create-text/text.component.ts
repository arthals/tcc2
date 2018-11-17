import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'text.component.html',
})

export class CreateTextComponent {
  constructor(private fb: FormBuilder) { }

  public form: FormGroup = this.fb.group({
    texto: ['', Validators.required],

});
}
