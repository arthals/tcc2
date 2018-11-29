import { Router, ActivatedRoute } from '@angular/router';
import { Component, AfterViewInit, Inject } from '@angular/core';
import { Texto } from '../../texto.model';
import { TextoService } from '../../texto.service';
import { ContextoService } from 'src/app/features/contextos/Contexto.service';
import { Context } from 'src/app/features/contextos/Contexto.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from 'src/app/features/contextos/create-context/create-context.component';

@Component({
  templateUrl: 'detail-text.component.html',
  styleUrls: ['detail-text.component.css']
})
export class TextDetailComponent implements AfterViewInit {

  public parser = new DOMParser();
  public texto: Texto;
  constructor(private resolver: TextoService,
              private router: Router,
              private route: ActivatedRoute,
              private service: ContextoService,
              public dialog: MatDialog) {
              }

      ngAfterViewInit(): void {
      let id: any;
      this.route.params.subscribe(params => {
        id = params['textoId'];
      });

      this.resolver
         .get(id)
         .subscribe(
          result => (this.texto = result),
          error => console.log('Deu ruim: ' + error),
          () => document.getElementById('x').outerHTML = this.texto.palavras,
          );

    const button = document.getElementsByClassName('btn-save');

    for (let x = 0; x < button.length; x++ ) {
        button[x].addEventListener('click',
        () => this.readContext(button[x].id));
     }
    }
    public readContext(id: string) {
      const idNumber: number = +id; // y: number
      let contexto: Context;
      this.service
         .get(idNumber)
         .subscribe(
          result => (contexto = result)
          );
    }

    openDialog(context: string): void {
      const dialogRef = this.dialog.open(ContextDialogOverviewExampleDialogComponent, {
        width: '400px',
        height: '400px',
        data: {trecho: context, arquivos: new Array<string|any>(), significado: ''}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}



@Component({
  selector: 'app-create-text.dialog',
  templateUrl: 'create-text.dialog.html',
})
export class ContextDialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ContextDialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
