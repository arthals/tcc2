import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Texto, UpdateTextCommand } from '../texto.model';
import { TextoService } from '../texto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'update-text.component.html',
  styleUrls: ['update-text.component.css']
})
export class TextUpdateComponent implements OnInit, AfterViewInit {


  public parser = new DOMParser();
  public texto: Texto;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private resolver: TextoService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
              }

    public form: FormGroup = this.fb.group({
      palavras: ['', Validators.required]
    });

    ngAfterViewInit(): void {
      this.aplicaEstiloEnLaFlora();
      this.ponerElBotonEnLaCasaDelCarajo();
    }
    public onCreate(): void {
      const textCmd: UpdateTextCommand = new UpdateTextCommand(this.form.value !== '' ? this.form.value : this.texto.palavras);
      textCmd.id = this.texto.id;

      this.resolver.put(textCmd)
      .take(1)
      .subscribe(() => {
      });
    }

    ngOnInit(): void {
      let id: any;
      this.route.params.subscribe(params => {
        id = params['textoId'];
      });

      this.resolver
         .get(id)
         .subscribe(
          result => (this.texto = result),
          error => console.log('Deu ruim: ' + error),
          () => this.preencherAPorraTextarea()
          );
    }

    preencherAPorraTextarea(): void {
      document.getElementsByClassName('fr-view')[0].innerHTML = this.texto.palavras;

      const a =   document.getElementsByClassName('fr-wrapper')[0];
      a.className = a.className.replace('show-placeholder', '');
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
