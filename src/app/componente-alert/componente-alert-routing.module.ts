import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteAlertPage } from './componente-alert.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteAlertPageRoutingModule {}
