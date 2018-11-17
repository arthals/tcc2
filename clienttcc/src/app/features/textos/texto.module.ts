import { NgModule } from '@angular/core';

import { TextRoutingModule } from './texto-routing.module';
import { CreateTextComponent } from './create-text/text.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TextRoutingModule,
    ReactiveFormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
  ],
  declarations: [
    CreateTextComponent,
  ],
  exports: [
    CreateTextComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})

export class TextoModule { }
