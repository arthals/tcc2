import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ContextoService } from '../Contexto.service';
import { CreateContextCommand, Context, ContextButton } from '../Contexto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Texto } from '../../textos/texto.model';
import { TextoService } from '../../textos/texto.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  templateUrl: 'create-context.component.html',
  styleUrls: ['create-context.component.scss']
})

export class CreateContextComponent implements OnInit {

  public texto: Texto;
  public palavras: string[];
  public botoes: Array<number>;
  public contextos: Array<ContextButton>;
  public textId: number;
  public RealTexto: string;
  constructor(public dialog: MatDialog,
              private resolver: TextoService,
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
    const novo = new Array<ContextButton>();
    this.RealTexto = this.RealTexto.replace(this.contextos[arrayNovo[0]].palavra,
      '<a (click)="pegarContexto("arthals1234")" >'
      + this.contextos[arrayNovo[0]].palavra);
      this.RealTexto = this.RealTexto.replace(this.contextos[arrayNovo[arrayNovo.length - 1]].palavra,
        this.contextos[arrayNovo[arrayNovo.length - 1]].palavra + '</a>');
        console.log(this.RealTexto);
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
    this.openDialog(novoBotao);
  }
  ngOnInit(): void {
    let id: any;
    this.route.params.subscribe(params => {
      id = params['TextoId'];
      this.textId = id;
    });

    this.resolver
    .get(id)
    .subscribe(
     result => (this.palavras = this.splitHTML(result.palavras)),
     error => console.log('Deu ruim: ' + error),
    );
  }

  public splitHTML(text: string): string[] {
    this.RealTexto = text;
    const re = /<\/{0,1}[a-z]+>/gi;
    const replaced: string = text.replace(re, '');
    this.contextos = new Array<ContextButton>();
    const a: string[] = replaced.split(' ');
    for ( let i = 0; i < a.length; i++) {
      this.contextos.push(new ContextButton(a[i], i));
    }
    return a;
  }

  openDialog(context: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '400px',
      height: '400px',
      data: {trecho: context, arquivos: new Array<string|any>(), significado: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.onCreteContext(result);
    });
  }

  public onCreteContext(a: DialogData): void {
    const textCmd: CreateContextCommand = new CreateContextCommand(a);
    textCmd.idTexto = this.textId;
    this.service
      .post(textCmd)
      .take(1)
      .subscribe(result => {
      });
  }
}

export interface DialogData {
  significado: string;
  trecho: string;
  arquivos: Array<string|any>;
  arquivo: string|any;
}

@Component({
  selector: 'app-create-context.dialog',
  templateUrl: 'create-context.dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
