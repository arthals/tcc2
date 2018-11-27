import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'textos',
        loadChildren: './features/textos/texto.module#TextoModule',
      },
      {
        path: 'contextos',
        loadChildren: './features/contextos/contexto.module#ContextoModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
