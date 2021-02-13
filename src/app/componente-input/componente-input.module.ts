import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteInputPageRoutingModule } from './componente-input-routing.module';

import { ComponenteInputPage } from './componente-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteInputPageRoutingModule
  ],
  declarations: [ComponenteInputPage]
})
export class ComponenteInputPageModule {}
