import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Texto } from '../../texto.model';
import { TextoService } from '../../texto.service';

@Component({
  templateUrl: 'detail-text.component.html',
})
export class TextDetailComponent implements OnInit {

  public parser = new DOMParser();
  public texto: Texto;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private resolver: TextoService,
              private router: Router,
              private route: ActivatedRoute) {
              }

    ngOnInit(): void {
      let id: any;
      this.route.params.subscribe(params => {
        id = params['textoId'];
      });

      this.resolver
         .get(id)
         .subscribe(
          result => (this.texto = result),
          error => console.log('Deu ruim: ' + error),
          () => document.getElementById('x').innerHTML = this.texto.palavras
          );
    }
}
