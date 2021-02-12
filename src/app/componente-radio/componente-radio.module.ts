import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteRadioPageRoutingModule } from './componente-radio-routing.module';

import { ComponenteRadioPage } from './componente-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteRadioPageRoutingModule
  ],
  declarations: [ComponenteRadioPage]
})
export class ComponenteRadioPageModule {}
