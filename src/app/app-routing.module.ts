import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'instalacao',
    loadChildren: () => import('./instalacao/instalacao.module').then( m => m.InstalacaoPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'layout-header-footer',
    loadChildren: () => import('./layout-header-footer/layout-header-footer.module').then( m => m.LayoutHeaderFooterPageModule)
  },
  {
    path: 'layout-tabs',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then( m => m.LayoutTabsPageModule)
  },
  {
    path: 'layout-menu',
    loadChildren: () => import('./layout-menu/layout-menu.module').then( m => m.LayoutMenuPageModule)
  },
  {
    path: 'layout-split',
    loadChildren: () => import('./layout-split/layout-split.module').then( m => m.LayoutSplitPageModule)
  },
  {
    path: 'layout-grid',
    loadChildren: () => import('./layout-grid/layout-grid.module').then( m => m.LayoutGridPageModule)
  },
  {
    path: 'layout-css-utilities',
    loadChildren: () => import('./layout-css-utilities/layout-css-utilities.module').then( m => m.LayoutCssUtilitiesPageModule)
  },
  {
    path: 'componentes',
    loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesPageModule)
  },
  {
    path: 'componente-action-sheet',
    loadChildren: () => import('./componente-action-sheet/componente-action-sheet.module').then( m => m.ComponenteActionSheetPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
