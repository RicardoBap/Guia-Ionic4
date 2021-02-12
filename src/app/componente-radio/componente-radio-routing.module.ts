import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteRadioPage } from './componente-radio.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteRadioPageRoutingModule {}
