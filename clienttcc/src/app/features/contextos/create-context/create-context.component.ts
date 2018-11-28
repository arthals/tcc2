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
      x = false;
    for (let d = 0; d < this.botoes.length; d++ ) {
      x = true;
      const s = (this.botoes[d] + 1);
      const a = (this.botoes[d] - 1);
      if ( s === lugar || a === lugar) {
        x = false;
        break;
      }
    }
    if (!x) {
      this.botoes.push(lugar);
    }
    }
  }

  public juntar(): void {
    let novoBotao = '';
    const arrayNovo = this.botoes.sort();
    const novosBotoes = new Array<ContextButton>();
    for (let a = 0; a < arrayNovo.length; a++ ) {
        novoBotao += ' ' + this.contextos[arrayNovo[a]].palavra;
    }
    for (let d = 0; d < arrayNovo[0]; d++ ) {
      novosBotoes.push(this.contextos[d]);
    }
    novosBotoes.push(new ContextButton(novoBotao, arrayNovo[0]));
    const iniRest = arrayNovo[0] + (arrayNovo[arrayNovo.length - 1] - arrayNovo[0]) + 1;
    for (let d = iniRest; d < this.contextos.length; d++ ) {
      novosBotoes.push(this.contextos[d]);
    }
    this.contextos = new Array<ContextButton>();
    this.contextos = novosBotoes;
    for (let d = 0; d < this.contextos.length; d++ ) {
      this.contextos[d].lugar = d;
    }
    this.botoes = new Array<number>();
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
