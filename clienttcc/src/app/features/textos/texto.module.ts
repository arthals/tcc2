import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TextoResolveService, TextoService } from './texto.service';
import { TextRoutingModule } from './texto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTextComponent } from './create-text/create-text.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TextoViewComponent } from './view-text/view-text.component';
import { TextDetailComponent, ContextDialogOverviewExampleDialogComponent } from './view-text/detail-text/detail-text.component';
import { TextUpdateComponent } from './update-text/update-text.component';
import { ContextoService } from '../contextos/Contexto.service';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    TextRoutingModule,
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
    CreateTextComponent,
    TextoViewComponent,
    TextDetailComponent,
    TextUpdateComponent,
    ContextDialogOverviewExampleDialogComponent
  ],
  exports: [
    CreateTextComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TextoService,
    ContextoService,
    TextoResolveService,
    TagCloudModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
  ],
  entryComponents: [
    ContextDialogOverviewExampleDialogComponent
  ]
})
export class TextoModule {}
