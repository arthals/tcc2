import { DialogData } from './create-context/create-context.component';

export class Context {
  public id: number;
  public palavras: string;
  public trecho: string;
  public significado: string;
  public idTexto: number;
  // A  public conContexts: ConContexts[] = [];
}
export class ContextButton {
  public lugar: number;
  public palavra: string;
  constructor(palavra: string, lugar: number ) {
    this.palavra = palavra;
    this.lugar = lugar;
  }
}

export class CreateContextCommand {
  significado: string;
  trecho: string;
  public idTexto: number;

  constructor(context: DialogData) {
  this.significado = context.significado;
  this.trecho = context.trecho;
  }
}

export class UpdateContextCommand {
  public id: number;
  public palavras: string;

  constructor(context: Context) {
    this.id = context.id;
    this.palavras = context.palavras;
  }
}
