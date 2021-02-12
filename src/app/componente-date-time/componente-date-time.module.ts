import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteDateTimePageRoutingModule } from './componente-date-time-routing.module';

import { ComponenteDateTimePage } from './componente-date-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteDateTimePageRoutingModule
  ],
  declarations: [ComponenteDateTimePage]
})
export class ComponenteDateTimePageModule {}
