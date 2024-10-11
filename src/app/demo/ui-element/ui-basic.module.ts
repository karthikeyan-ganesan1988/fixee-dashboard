import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { UiBasicRoutingModule } from './ui-basic-routing.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, NKDatetimeModule, UiBasicRoutingModule]
})
export class UiBasicModule {}
