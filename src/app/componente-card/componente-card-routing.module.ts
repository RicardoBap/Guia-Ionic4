import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteCardPage } from './componente-card.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteCardPageRoutingModule {}
