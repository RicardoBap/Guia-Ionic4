import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteCheckboxPage } from './componente-checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteCheckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteCheckboxPageRoutingModule {}
