import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTextComponent } from './create-text/create-text.component';
import { TextDetailComponent } from './view-text/detail-text/detail-text.component';
import { TextUpdateComponent } from './update-text/update-text.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
  },
  {
    path: 'create',
    component: CreateTextComponent,
  },
  {
    path: ':textoId/info',
      component: TextDetailComponent,
  },
  {
    path: ':textoId/edit',
      component: TextUpdateComponent,
  },
  // {
  //   path: ':textoId',
  //   resolve: {
  //     texto: TextoResolveService,
  //   },
  //   data: {
  //       breadcrumbOptions: {
  //           breadcrumbId: 'texto',
  //       },
  //   },
  //   children: [
  //     {
  //       path: '',
  //       component: TextoViewComponent,
  //       children: [
  //         {
  //           path: '',
  //           redirectTo: 'info',
  //           children: [
  //             {
  //               path: '',
  //               component: TextDetailComponent,
  //             },
  //             {
  //               path: 'edit',
  //               // Acomponent: TextoEditComponent,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextRoutingModule { }
