import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextoService } from '../textos/texto.service';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { ContextRoutingModule } from './Contexto-routing.module';
import { ContextoService, ContextoResolveService } from './Contexto.service';
import { ContextoViewComponent } from './view-context/view-context.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ContextUpdateComponent } from './update-context/update-context.component';
import { CreateContextComponent, DialogOverviewExampleDialogComponent } from './create-context/create-context.component';
import { ContextDetailComponent } from './view-context/detail-context/detail-context.component';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatRippleModule, MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ContextRoutingModule,
    ReactiveFormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
    TagCloudModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
  ],
  declarations: [
    CreateContextComponent,
    ContextoViewComponent,
    ContextDetailComponent,
    ContextUpdateComponent,
    DialogOverviewExampleDialogComponent
  ],
  exports: [
    CreateContextComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
  ],
  providers: [
    ContextoService,
    TextoService,
    ContextoResolveService,
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent
  ]
})
export class ContextoModule {}
