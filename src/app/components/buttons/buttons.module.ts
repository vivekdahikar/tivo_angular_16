import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { BtnNestingComponent } from './button-group/btn-nesting/btn-nesting.component';
import { BtnVerticalComponent } from './button-group/btn-vertical/btn-vertical.component';
import { CheckBoxBtnGroupComponent } from './button-group/check-box-btn-group/check-box-btn-group.component';
import { OutlineBtnGroupComponent } from './button-group/outline-btn-group/outline-btn-group.component';
import { OutlineCustomBtnGroupComponent } from './button-group/outline-custom-btn-group/outline-custom-btn-group.component';
import { OutlineCustomBtnGroup2Component } from './button-group/outline-custom-btn-group2/outline-custom-btn-group2.component';
import { OutlineEdgeBtnComponent } from './button-group/outline-edge-btn/outline-edge-btn.component';
import { OutlineFlatBtnComponent } from './button-group/outline-flat-btn/outline-flat-btn.component';
import { RadioBtnGroupComponent } from './button-group/radio-btn-group/radio-btn-group.component';
import { RoundBtnGroupComponent } from './button-group/round-btn-group/round-btn-group.component';
import { SquareBtnGroupComponent } from './button-group/square-btn-group/square-btn-group.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ButtonGroupComponent,
    BtnNestingComponent,
    BtnVerticalComponent,
    CheckBoxBtnGroupComponent,
    OutlineBtnGroupComponent,
    OutlineCustomBtnGroupComponent,
    OutlineCustomBtnGroup2Component,
    OutlineEdgeBtnComponent,
    OutlineFlatBtnComponent,
    RadioBtnGroupComponent,
    RoundBtnGroupComponent,
    SquareBtnGroupComponent,
    DefaultStyleComponent,
  ],
  imports: [CommonModule, ButtonsRoutingModule, SharedModule],
})
export class ButtonsModule {}
