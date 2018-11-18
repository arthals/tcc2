import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContextoService, ContextoResolveService } from './Contexto.service';
import { ContextRoutingModule } from './Contexto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ContextUpdateComponent } from './update-Context/update-Context.component';
import { ContextoViewComponent } from './view-text/view-context.component';
import { ContextDetailComponent } from './view-text/detail-text/detail-text.component';
import { CreateContextComponent } from './create-context/create-context.component';

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
    ContextoResolveService
  ]
})
export class ContextoModule {}
