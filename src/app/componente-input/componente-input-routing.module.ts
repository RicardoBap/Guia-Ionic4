import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteInputPage } from './componente-input.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteInputPageRoutingModule {}
