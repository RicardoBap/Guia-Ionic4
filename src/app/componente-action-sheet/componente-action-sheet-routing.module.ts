import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteActionSheetPage } from './componente-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteActionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteActionSheetPageRoutingModule {}
