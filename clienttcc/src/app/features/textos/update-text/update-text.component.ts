import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Texto, UpdateTextCommand } from '../texto.model';
import { TextoService } from '../texto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'update-text.component.html',
})
export class TextUpdateComponent implements OnInit {

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
}
