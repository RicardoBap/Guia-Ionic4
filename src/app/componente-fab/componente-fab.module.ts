import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteFabPageRoutingModule } from './componente-fab-routing.module';

import { ComponenteFabPage } from './componente-fab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteFabPageRoutingModule
  ],
  declarations: [ComponenteFabPage]
})
export class ComponenteFabPageModule {}
