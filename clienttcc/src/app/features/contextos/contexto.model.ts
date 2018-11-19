export class Context {
  public id: number;
  public palavras: string;
  // A  public conContexts: ConContexts[] = [];
}

export class CreateContextCommand {
  public palavras: string;

  constructor(context: Context) {
    this.palavras = context.palavras;
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
