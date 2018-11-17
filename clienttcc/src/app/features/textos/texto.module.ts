import { TextoService } from './texto.service';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TextRoutingModule } from './texto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTextComponent } from './create-text/create-text.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TextoViewComponent } from './view-text/view-text.component';
import { TextDetailComponent } from './view-text/detail-text/detail-text.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    TextRoutingModule,
    ReactiveFormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
  ],
  declarations: [CreateTextComponent, TextoViewComponent, TextDetailComponent],
  exports: [CreateTextComponent, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [TextoService]
})
export class TextoModule {}
