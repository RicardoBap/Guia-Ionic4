import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteBotaoPage } from './componente-botao.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteBotaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteBotaoPageRoutingModule {}
