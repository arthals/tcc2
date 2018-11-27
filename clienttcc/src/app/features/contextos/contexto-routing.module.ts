import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateContextComponent } from './create-context/create-context.component';
import { ContextUpdateComponent } from './update-context/update-context.component';
import { ContextDetailComponent } from './view-context/detail-context/detail-context.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
  },
  {
    path: ':TextoId/create',
    component: CreateContextComponent,
  },
  {
    path: ':TextoId/:ContextoId/info',
      component: ContextDetailComponent,
  },
  {
    path: ':TextoId/:ContextoId/edit',
      component: ContextUpdateComponent,
  },
  // {
  //   path: ':ContextoId',
  //   resolve: {
  //     Contexto: ContextoResolveService,
  //   },
  //   data: {
  //       breadcrumbOptions: {
  //           breadcrumbId: 'Contexto',
  //       },
  //   },
  //   children: [
  //     {
  //       path: '',
  //       component: ContextoViewComponent,
  //       children: [
  //         {
  //           path: '',
  //           redirectTo: 'info',
  //           children: [
  //             {
  //               path: '',
  //               component: ContextDetailComponent,
  //             },
  //             {
  //               path: 'edit',
  //               // Acomponent: ContextoEditComponent,
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
export class ContextRoutingModule { }
