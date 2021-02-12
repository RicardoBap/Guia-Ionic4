import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteBadgesPage } from './componente-badges.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteBadgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteBadgesPageRoutingModule {}
