export class Texto {
  public id: number;
  public palavras: string;
  // A  public contextos: Contextos[] = [];
}

export class CreateTextCommand {
  public palavras: string;
  constructor(texto: Texto) {
    this.palavras = texto.palavras;
  }
}
