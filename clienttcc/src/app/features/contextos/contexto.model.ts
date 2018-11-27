export class Context {
  public id: number;
  public palavras: string;
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
  public palavras: string;
  public idTexto: number;

  constructor(context: Context) {
    this.palavras = context.palavras;
  this.idTexto = context.idTexto;
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
