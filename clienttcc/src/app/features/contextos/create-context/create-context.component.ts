import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ContextoService } from '../Contexto.service';
import { CreateContextCommand, Context, ContextButton } from '../Contexto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Texto } from '../../textos/texto.model';
import { TextoService } from '../../textos/texto.service';
import { CloudOptions, CloudData } from 'angular-tag-cloud-module';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'create-context.component.html',
  styleUrls: ['create-context.component.css']
})

export class CreateContextComponent implements OnInit {

  public texto: Texto;
  public palavras: string[] = [];
  public words: CloudData[] = [];
  public botoes: Array<number>;
  public novoContexto = '';
  public contextos: Array<ContextButton>;
  constructor(private resolver: TextoService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: ContextoService) { this.botoes = new Array<number>(); }

  public form: FormGroup = this.fb.group({
    palavras: ['', Validators.required]
  });
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 1000,
    height: 400,
    overflow: false,
  };
  data: CloudData[] = [
  ];
  teste: CloudData[] = [];
  updateNewContext(clicked: CloudData) {
    this.novoContexto += ' ' + clicked.text.trim();
  }
  cleanContext() {
    this.novoContexto = '';
  }
  public onCreate(lugar: number): void {
    let x = false;
    for (let d = 0; d < this.botoes.length; d++) {
      if (this.botoes[d] === lugar) {
        x = true;
      }
    }
    if (!x) {
      this.botoes.push(lugar);
    }
  }
  newData() {
    const changedData$: Observable<CloudData[]> = Observable.of(this.teste);
    changedData$.subscribe(res => this.data = res);
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
  private splitHTML(text: string): string[] {
    const re = /<\/{0,1}[a-z]+>/gi;
    const replaced: string = text.replace(re, '');

    const a: string[] = replaced.split(' ');
    for (let i = 0; i < a.length; i++) {
      this.teste.push({ text: a[i], weight: 5});
    }
    this.newData();
    return a;
  }
}
