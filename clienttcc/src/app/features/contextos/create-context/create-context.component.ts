import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ContextoService } from '../Contexto.service';
import { CreateContextCommand, Context, ContextButton } from '../Contexto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Texto } from '../../textos/texto.model';
import { TextoService } from '../../textos/texto.service';

@Component({
  templateUrl: 'create-context.component.html',
  styleUrls: ['create-context.component.css']
})

export class CreateContextComponent implements OnInit {

  public texto: Texto;
  public palavras: string[];
  public botoes: Array<number>;
  public contextos: Array<ContextButton>;
  constructor(private resolver: TextoService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private service: ContextoService) { this.botoes = new Array<number>(); }

  public form: FormGroup = this.fb.group({
    palavras: ['', Validators.required]
  });

  public onCreate(lugar: number): void {
    let x = false;
    for (let d = 0; d < this.botoes.length; d++ ) {
      if ( this.botoes[d] === lugar) {
        x = true;
      }
    }
    if (!x) {
      this.botoes.push(lugar);
    }
  }

  ngOnInit(): void {
    let id: any;
    this.route.params.subscribe(params => {
      id = params['TextoId'];
    });

    this.resolver
    .get(id)
    .subscribe(
     result => (this.palavras = this.splitHTML(result.palavras)),
     error => console.log('Deu ruim: ' + error),
    );
  }
  public splitHTML(text: string): string[] {
    const re = /<\/{0,1}[a-z]+>/gi;
    const replaced: string = text.replace(re, '');
    this.contextos = new Array<ContextButton>();
    const a: string[] = replaced.split(' ');
    for ( let i = 0; i < a.length; i++) {
      this.contextos.push(new ContextButton(a[i], i));
    }
    return a;
  }
}
