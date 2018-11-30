import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, AfterViewInit, Inject } from '@angular/core';
import { Texto } from '../../texto.model';
import { TextoService } from '../../texto.service';
import { ContextoService } from 'src/app/features/contextos/Contexto.service';
import { Context } from 'src/app/features/contextos/Contexto.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from 'src/app/features/contextos/create-context/create-context.component';
import * as $ from 'jquery';

@Component({
  templateUrl: 'detail-text.component.html',
  styleUrls: ['detail-text.component.css']
})
export class TextDetailComponent implements AfterViewInit {

  public parser = new DOMParser();
  public texto: Texto;
  public contexto: Context;
  constructor(private resolver: TextoService,
              private router: Router,
              private route: ActivatedRoute,
              private service: ContextoService,
              private httpClient: HttpClient,
              public dialog: MatDialog) {
              }

    ngAfterViewInit(): void {
        // Get the modal
        const modal = document.getElementById('myModal');

        // Get the button that opens the modal
        const btn = document.getElementsByClassName('contextos');

        // Get the <span> element that closes the modal
        const span = document.getElementById('close');

        // When the user clicks the button, open the modal

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = 'none';
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            // tslint:disable-next-line:triple-equals
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };


      let id: any;
      this.route.params.subscribe(params => {
        id = params['textoId'];
      });

      this.resolver
         .get(id)
         .subscribe(
          result => (this.texto = result),
          error => console.log('Deu ruim: ' + error),
          () => this.tudo(this.texto.palavras),
          );

    }
    public tudo(palavras: string) {

      document.getElementById('x').outerHTML = palavras;
      const button = document.getElementsByClassName('contextos');
      const fun = this.readContext;
      const modal = document.getElementById('myModal');
      const s = this.service;

      $('.contextos').click(function() {
        modal.style.display = 'block';
        fun.call(this.id, s);
      });
    }

    public readContext(id: string, service: ContextoService) {
      const idNumber: number = +id; // y: number
      const serviceNov = new ContextoService(this.httpClient);
      serviceNov
         .get(idNumber)
         .subscribe(
          result => (this.contexto = result)
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
    @Inject(MAT_DIALOG_DATA) public data: Context) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
