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
  },
  {
    path: 'componente-alert',
    loadChildren: () => import('./componente-alert/componente-alert.module').then( m => m.ComponenteAlertPageModule)
  },
  {
    path: 'componente-badges',
    loadChildren: () => import('./componente-badges/componente-badges.module').then( m => m.ComponenteBadgesPageModule)
  },
  {
    path: 'componente-botao',
    loadChildren: () => import('./componente-botao/componente-botao.module').then( m => m.ComponenteBotaoPageModule)
  },
  {
    path: 'componente-card',
    loadChildren: () => import('./componente-card/componente-card.module').then( m => m.ComponenteCardPageModule)
  },
  {
    path: 'componente-checkbox',
    loadChildren: () => import('./componente-checkbox/componente-checkbox.module').then( m => m.ComponenteCheckboxPageModule)
  },
  {
    path: 'componente-radio',
    loadChildren: () => import('./componente-radio/componente-radio.module').then( m => m.ComponenteRadioPageModule)
  },
  {
    path: 'componente-date-time',
    loadChildren: () => import('./componente-date-time/componente-date-time.module').then( m => m.ComponenteDateTimePageModule)
  },
  {
    path: 'componente-fab',
    loadChildren: () => import('./componente-fab/componente-fab.module').then( m => m.ComponenteFabPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
