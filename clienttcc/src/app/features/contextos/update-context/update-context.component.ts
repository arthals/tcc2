import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {  UpdateContextCommand, Context } from '../Contexto.model';
import { ContextoService } from '../Contexto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'update-context.component.html',
})
export class ContextUpdateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
