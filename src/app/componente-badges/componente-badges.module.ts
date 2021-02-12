import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteBadgesPageRoutingModule } from './componente-badges-routing.module';

import { ComponenteBadgesPage } from './componente-badges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteBadgesPageRoutingModule
  ],
  declarations: [ComponenteBadgesPage]
})
export class ComponenteBadgesPageModule {}
