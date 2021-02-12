import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteCardPageRoutingModule } from './componente-card-routing.module';

import { ComponenteCardPage } from './componente-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteCardPageRoutingModule
  ],
  declarations: [ComponenteCardPage]
})
export class ComponenteCardPageModule {}
