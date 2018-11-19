import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateContextComponent } from './create-Context/create-Context.component';
import { ContextUpdateComponent } from './update-Context/update-Context.component';
import { ContextDetailComponent } from './view-text/detail-text/detail-text.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
  },
  {
    path: 'create',
    component: CreateContextComponent,
  },
  {
    path: ':ContextoId/info',
      component: ContextDetailComponent,
  },
  {
    path: ':ContextoId/edit',
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
