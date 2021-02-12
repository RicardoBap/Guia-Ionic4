import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteCheckboxPageRoutingModule } from './componente-checkbox-routing.module';

import { ComponenteCheckboxPage } from './componente-checkbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteCheckboxPageRoutingModule
  ],
  declarations: [ComponenteCheckboxPage]
})
export class ComponenteCheckboxPageModule {}
