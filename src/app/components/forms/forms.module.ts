import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsRoutingModule } from "./forms-routing.module";
import { FormWidgetsComponent } from "./form-widgets/form-widgets.component";
import { BaseInputsComponent } from "./form-controls/base-inputs/base-inputs.component";
import { CheckboxRadioComponent } from "./form-controls/checkbox-radio/checkbox-radio.component";
import { FormValidationComponent } from "./form-controls/form-validation/form-validation.component";
import { InputGroupsComponent } from "./form-controls/input-groups/input-groups.component";
import { MegaOptionsComponent } from "./form-controls/mega-options/mega-options.component";
import { ClipboardComponent } from "./form-widgets/clipboard/clipboard.component";
import { DatepickerComponent } from "./form-widgets/datepicker/datepicker.component";
import { DatetimepickerComponent } from "./form-widgets/datetimepicker/datetimepicker.component";
import { Select2Component } from "./form-widgets/select2/select2.component";
import { SwitchComponent } from "./form-widgets/switch/switch.component";
import { TouchspinComponent } from "./form-widgets/touchspin/touchspin.component";
import { TypeaheadComponent } from "./form-widgets/typeahead/typeahead.component";
import { BasicFormControlComponent } from "./form-controls/base-inputs/basic-form-control/basic-form-control.component";
import { BasicHtmlInputControlComponent } from "./form-controls/base-inputs/basic-html-input-control/basic-html-input-control.component";
import { CustomControlsComponent } from "./form-controls/base-inputs/custom-controls/custom-controls.component";
import { EdgeInputStyleComponent } from "./form-controls/base-inputs/edge-input-style/edge-input-style.component";
import { FlatInputStyleComponent } from "./form-controls/base-inputs/flat-input-style/flat-input-style.component";
import { InputSizingComponent } from "./form-controls/base-inputs/input-sizing/input-sizing.component";
import { RaiseInputStyleComponent } from "./form-controls/base-inputs/raise-input-style/raise-input-style.component";
import { SolidInputStyleComponent } from "./form-controls/base-inputs/solid-input-style/solid-input-style.component";
import { AnimatedCheckboxButtonsComponent } from "./form-controls/checkbox-radio/animated-checkbox-buttons/animated-checkbox-buttons.component";
import { AnimatedRadioButtonsComponent } from "./form-controls/checkbox-radio/animated-radio-buttons/animated-radio-buttons.component";
import { CustomCheckboxComponent } from "./form-controls/checkbox-radio/custom-checkbox/custom-checkbox.component";
import { CustomRadioComponent } from "./form-controls/checkbox-radio/custom-radio/custom-radio.component";
import { SquareCheckboxComponent } from "./form-controls/checkbox-radio/square-checkbox/square-checkbox.component";
import { BrowserDefaultsComponent } from "./form-controls/form-validation/browser-defaults/browser-defaults.component";
import { CustomStyleComponent } from "./form-controls/form-validation/custom-style/custom-style.component";
import { SupportedElementsComponent } from "./form-controls/form-validation/supported-elements/supported-elements.component";
import { TooltipsComponent } from "./form-controls/form-validation/tooltips/tooltips.component";
import { BasicInputGroupsComponent } from "./form-controls/input-groups/basic-input-groups/basic-input-groups.component";
import { BasicInputGroups2Component } from "./form-controls/input-groups/basic-input-groups2/basic-input-groups2.component";
import { DefaultStyleComponent } from "./form-controls/mega-options/default-style/default-style.component";
import { HorizontalComponent } from "./form-controls/mega-options/horizontal/horizontal.component";
import { InlineStyleComponent } from "./form-controls/mega-options/inline-style/inline-style.component";
import { NoBorderComponent } from "./form-controls/mega-options/no-border/no-border.component";
import { OfferBorderStyleComponent } from "./form-controls/mega-options/offer-border-style/offer-border-style.component";
import { SolidBorderStyleComponent } from "./form-controls/mega-options/solid-border-style/solid-border-style.component";
import { VerticalStyleComponent } from "./form-controls/mega-options/vertical-style/vertical-style.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxSliderModule } from 'ngx-slider-v2';

import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from "@danielmoncada/angular-datetime-picker";
import { ColorVarientComponent } from "./form-widgets/select2/color-varient/color-varient.component";
import { FullColorVarientComponent } from "./form-widgets/select2/full-color-varient/full-color-varient.component";
import { BasicColorComponent } from "./form-widgets/switch/basic-color/basic-color.component";
import { BasicSwitchComponent } from "./form-widgets/switch/basic-switch/basic-switch.component";
import { SwitchOutlineComponent } from "./form-widgets/switch/switch-outline/switch-outline.component";
import { SwitchSizingComponent } from "./form-widgets/switch/switch-sizing/switch-sizing.component";
import { SwitchUncheckedOutlineComponent } from "./form-widgets/switch/switch-unchecked-outline/switch-unchecked-outline.component";
import { SwitchWithColorComponent } from "./form-widgets/switch/switch-with-color/switch-with-color.component";
import { SwitchWithIconComponent } from "./form-widgets/switch/switch-with-icon/switch-with-icon.component";

@NgModule({
  declarations: [
    FormWidgetsComponent,
    BaseInputsComponent,
    CheckboxRadioComponent,
    FormValidationComponent,
    InputGroupsComponent,
    MegaOptionsComponent,
    ClipboardComponent,
    DatepickerComponent,
    DatetimepickerComponent,
    Select2Component,
    SwitchComponent,
    TouchspinComponent,
    TypeaheadComponent,
    BasicFormControlComponent,
    BasicHtmlInputControlComponent,
    CustomControlsComponent,
    EdgeInputStyleComponent,
    FlatInputStyleComponent,
    InputSizingComponent,
    RaiseInputStyleComponent,
    SolidInputStyleComponent,
    AnimatedCheckboxButtonsComponent,
    AnimatedRadioButtonsComponent,
    CustomCheckboxComponent,
    CustomRadioComponent,
    SquareCheckboxComponent,
    BrowserDefaultsComponent,
    CustomStyleComponent,
    SupportedElementsComponent,
    TooltipsComponent,
    BasicInputGroupsComponent,
    BasicInputGroups2Component,
    DefaultStyleComponent,
    HorizontalComponent,
    InlineStyleComponent,
    NoBorderComponent,
    OfferBorderStyleComponent,
    SolidBorderStyleComponent,
    VerticalStyleComponent,
    ColorVarientComponent,
    FullColorVarientComponent,
    BasicColorComponent,
    BasicSwitchComponent,
    SwitchOutlineComponent,
    SwitchSizingComponent,
    SwitchUncheckedOutlineComponent,
    SwitchWithColorComponent,
    SwitchWithIconComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMatTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
})
export class FormModule {}
