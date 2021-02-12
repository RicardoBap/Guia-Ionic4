import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSplitPage } from './layout-split.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutSplitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutSplitPageRoutingModule {}
