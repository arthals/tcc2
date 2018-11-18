import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {  UpdateContextCommand, Context } from '../Contexto.model';
import { ContextoService } from '../Contexto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'update-Context.component.html',
})
export class ContextUpdateComponent implements OnInit {

  public parser = new DOMParser();
  public Contexto: Context;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private resolver: ContextoService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
              }

    public form: FormGroup = this.fb.group({
      palavras: ['', Validators.required]
    });

    public onCreate(): void {
      const ContextCmd: UpdateContextCommand = new UpdateContextCommand(this.form.value !== '' ? this.form.value : this.Contexto.palavras);
      ContextCmd.id = this.Contexto.id;

      this.resolver.put(ContextCmd)
      .take(1)
      .subscribe(() => {
      });
    }

    ngOnInit(): void {
      let id: any;
      this.route.params.subscribe(params => {
        id = params['ContextoId'];
      });

      this.resolver
         .get(id)
         .subscribe(
          result => (this.Contexto = result),
          error => console.log('Deu ruim: ' + error),
          () => this.preencherAPorraContextarea()
          );
    }

    preencherAPorraContextarea(): void {
      document.getElementsByClassName('fr-view')[0].innerHTML = this.Contexto.palavras;

      const a =   document.getElementsByClassName('fr-wrapper')[0];
      a.className = a.className.replace('show-placeholder', '');
    }
}
