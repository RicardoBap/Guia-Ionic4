import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutSplitPageRoutingModule } from './layout-split-routing.module';

import { LayoutSplitPage } from './layout-split.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSplitPageRoutingModule
  ],
  declarations: [LayoutSplitPage]
})
export class LayoutSplitPageModule {}
