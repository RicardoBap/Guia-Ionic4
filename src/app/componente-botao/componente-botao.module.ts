import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteBotaoPageRoutingModule } from './componente-botao-routing.module';

import { ComponenteBotaoPage } from './componente-botao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteBotaoPageRoutingModule
  ],
  declarations: [ComponenteBotaoPage]
})
export class ComponenteBotaoPageModule {}
