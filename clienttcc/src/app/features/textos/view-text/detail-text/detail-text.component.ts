import { Component, OnInit } from '@angular/core';
import { Texto } from '../../texto.model';
import { Subject } from 'rxjs/Subject';
import { TextoResolveService } from '../../texto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'detail-text.component.html',
})
export class TextDetailComponent implements OnInit{
  public texto: Texto;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private resolver: TextoResolveService,
              private router: Router,
              private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.resolver.onChanges
      .takeUntil(this.ngUnsubscribe)
      .subscribe((texto: Texto) => {
        this.texto = Object.assign(new Texto(), texto);
      });
  }
}
