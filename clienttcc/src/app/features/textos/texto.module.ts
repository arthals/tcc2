import { TextoService } from './texto.service';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TextRoutingModule } from './texto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTextComponent } from './create-text/create-text.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TextRoutingModule,
    ReactiveFormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
    HttpClientModule,
  ],
  declarations: [CreateTextComponent],
  exports: [CreateTextComponent, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [TextoService]
})
export class TextoModule {}
