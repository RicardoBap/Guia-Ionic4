import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteFabPage } from './componente-fab.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteFabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteFabPageRoutingModule {}
