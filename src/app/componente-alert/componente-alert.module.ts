import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteAlertPageRoutingModule } from './componente-alert-routing.module';

import { ComponenteAlertPage } from './componente-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteAlertPageRoutingModule
  ],
  declarations: [ComponenteAlertPage]
})
export class ComponenteAlertPageModule {}
