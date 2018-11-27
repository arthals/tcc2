import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContextoService, ContextoResolveService } from './Contexto.service';
import { ContextRoutingModule } from './Contexto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ContextUpdateComponent } from './update-context/update-context.component';
import { ContextoViewComponent } from './view-context/view-context.component';
import { ContextDetailComponent } from './view-context/detail-context/detail-context.component';
import { CreateContextComponent } from './create-context/create-context.component';
import { TextoService } from '../textos/texto.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ContextRoutingModule,
    ReactiveFormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
  ],
  declarations: [
    CreateContextComponent,
    ContextoViewComponent,
    ContextDetailComponent,
    ContextUpdateComponent
  ],
  exports: [
    CreateContextComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ContextoService,
    TextoService,
    ContextoResolveService
  ]
})
export class ContextoModule {}
