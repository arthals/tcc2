import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTextComponent } from './create-text/text.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
  },
  {
    path: 'create',
    component: CreateTextComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextRoutingModule { }
