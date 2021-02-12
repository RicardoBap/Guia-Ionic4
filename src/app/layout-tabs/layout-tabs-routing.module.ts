import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutTabsPage } from './layout-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutTabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutTabsPageRoutingModule {}
