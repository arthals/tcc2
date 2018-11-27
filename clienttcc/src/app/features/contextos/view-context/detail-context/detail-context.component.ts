import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Context } from '../../Contexto.model';
import { ContextoService } from '../../Contexto.service';

@Component({
  templateUrl: 'detail-context.component.html',
})
export class ContextDetailComponent implements OnInit {

  public parser = new DOMParser();
  public Contexto: Context;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private resolver: ContextoService,
              private router: Router,
              private route: ActivatedRoute) {
              }

    ngOnInit(): void {
      let id: any;
      this.route.params.subscribe(params => {
        id = params['ContextoId'];
      });

      this.resolver
         .get(id)
         .subscribe(
          result => (this.Contexto = result),
          error => console.log('Deu ruim: ' + error),
          () => document.getElementById('x').innerHTML = this.Contexto.palavras
          );
    }
}
