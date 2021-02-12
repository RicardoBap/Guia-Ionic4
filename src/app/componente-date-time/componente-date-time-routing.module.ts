import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteDateTimePage } from './componente-date-time.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteDateTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteDateTimePageRoutingModule {}
