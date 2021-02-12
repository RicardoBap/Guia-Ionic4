import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteActionSheetPageRoutingModule } from './componente-action-sheet-routing.module';

import { ComponenteActionSheetPage } from './componente-action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteActionSheetPageRoutingModule
  ],
  declarations: [ComponenteActionSheetPage]
})
export class ComponenteActionSheetPageModule {}
