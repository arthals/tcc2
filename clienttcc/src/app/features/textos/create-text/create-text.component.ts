import { CreateTextCommand } from '../texto.model';
import { Component, AfterViewInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { TextoService } from '../texto.service';

@Component({
  templateUrl: 'create-text.component.html',
  styleUrls: ['create-text.component.css']
})
export class CreateTextComponent implements AfterViewInit {
  constructor(private fb: FormBuilder, private service: TextoService) { }

  public form: FormGroup = this.fb.group({
    palavras: ['', Validators.required]
  });

  ngAfterViewInit(): void {
    this.aplicaEstiloEnLaFlora();
    this.ponerElBotonEnLaCasaDelCarajo();
  }

  public onCreate(): void {
    const textCmd: CreateTextCommand = new CreateTextCommand(this.form.value);
    this.service
      .post(textCmd)
      .take(1)
      .subscribe(() => {});
  }

  // Gambiz's power
  private aplicaEstiloEnLaFlora(): void {
    const toolbar = document.getElementsByClassName(
      'fr-toolbar'
    ) as HTMLCollectionOf<HTMLElement>;
    toolbar[0].style.border = 'none';
    toolbar[0].style.boxShadow = 'none';
    const wrapper = document.getElementsByClassName(
      'fr-wrapper'
    ) as HTMLCollectionOf<HTMLElement>;
    wrapper[0].style.boxShadow = 'none';
  }

  // Gambiz's power
  private ponerElBotonEnLaCasaDelCarajo() {
    let button = document.getElementById('quote-1');
    button.className = '';
    const dropdownDoCaralho = document.getElementById('dropdown-menu-quote-1');
    dropdownDoCaralho.parentNode.removeChild(dropdownDoCaralho);

    const fodendoTemplate =
      '<a _ngcontent-c1="" class="btn" id="btn-save" >' +
      '<span _ngcontent-c1="" class="btn-content">Salvar</span>' +
      '<span _ngcontent-c1="" class="icon">' +
      '<i _ngcontent-c1="" aria-hidden="true" class="fa fa-arrow-right"></i>' +
      '</span> </a>';
    button.outerHTML = fodendoTemplate;

    button = document.getElementById('btn-save');
    button.addEventListener('click', () => this.onCreate());
  }
}
