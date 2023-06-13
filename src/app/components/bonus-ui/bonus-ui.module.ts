import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusUiRoutingModule } from './bonus-ui-routing.module';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BlogCardsComponent } from './basic-card/blog-cards/blog-cards.component';
import { CardWithBorderComponent } from './basic-card/card-with-border/card-with-border.component';
import { CardWithTabComponent } from './basic-card/card-with-tab/card-with-tab.component';
import { HorizontalCardComponent } from './basic-card/horizontal-card/horizontal-card.component';
import { ProfileCardComponent } from './basic-card/profile-card/profile-card.component';
import { BreadcrumbUiComponent } from './breadcrumb-ui/breadcrumb-ui.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { AnimateOwlComponent } from './owl-carousel/animate-owl/animate-owl.component';
import { AutoHeightOwlComponent } from './owl-carousel/auto-height-owl/auto-height-owl.component';
import { AutoPlayOwlComponent } from './owl-carousel/auto-play-owl/auto-play-owl.component';
import { AutoWidthOwlComponent } from './owl-carousel/auto-width-owl/auto-width-owl.component';
import { BasicOwlComponent } from './owl-carousel/basic-owl/basic-owl.component';
import { CenterOwlComponent } from './owl-carousel/center-owl/center-owl.component';
import { EventsOwlComponent } from './owl-carousel/events-owl/events-owl.component';
import { LazyLoadOwlComponent } from './owl-carousel/lazy-load-owl/lazy-load-owl.component';
import { MergeOwlComponent } from './owl-carousel/merge-owl/merge-owl.component';
import { MouseWheelOwlComponent } from './owl-carousel/mouse-wheel-owl/mouse-wheel-owl.component';
import { NavigationsOwlComponent } from './owl-carousel/navigations-owl/navigations-owl.component';
import { ResponsiveOwlComponent } from './owl-carousel/responsive-owl/responsive-owl.component';
import { RightToLeftOwlComponent } from './owl-carousel/right-to-left-owl/right-to-left-owl.component';
import { StagePaddingOwlComponent } from './owl-carousel/stage-padding-owl/stage-padding-owl.component';
import { PagignationComponent } from './pagignation/pagignation.component';
import { PaginationActiveDisabledComponent } from './pagignation/pagination-active-disabled/pagination-active-disabled.component';
import { PaginationAlignmentComponent } from './pagignation/pagination-alignment/pagination-alignment.component';
import { PaginationColorComponent } from './pagignation/pagination-color/pagination-color.component';
import { PaginationIconsComponent } from './pagignation/pagination-icons/pagination-icons.component';
import { PaginationSizingComponent } from './pagignation/pagination-sizing/pagination-sizing.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RatingComponent } from './rating/rating.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { StepsComponent } from './steps/steps.component';
import { DefaultPearlsStepsComponent } from './steps/default-pearls-steps/default-pearls-steps.component';
import { DefaultStepComponent } from './steps/default-step/default-step.component';
import { PearlsStepIconComponent } from './steps/pearls-step-icon/pearls-step-icon.component';
import { PearlsStepSizingComponent } from './steps/pearls-step-sizing/pearls-step-sizing.component';
import { PearlsStepStatesComponent } from './steps/pearls-step-states/pearls-step-states.component';
import { StepIconComponent } from './steps/step-icon/step-icon.component';
import { StepSizingComponent } from './steps/step-sizing/step-sizing.component';
import { StepStatesComponent } from './steps/step-states/step-states.component';
import { VerticalStepComponent } from './steps/vertical-step/vertical-step.component';
import { StickyComponent } from './sticky/sticky.component';
import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';
import { Timeline1Component } from './timeline1/timeline1.component';
import { TourComponent } from './tour/tour.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgxSliderModule } from 'ngx-slider-v2';
import { UsersModule } from '../users/users.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CommonProfileCardComponent } from './basic-card/profile-card/common-profile-card/common-profile-card.component';

@NgModule({
  declarations: [
    BasicCardComponent,
    BlogCardsComponent,
    CardWithBorderComponent,
    CardWithTabComponent,
    HorizontalCardComponent,
    ProfileCardComponent,
    BreadcrumbUiComponent,
    DropzoneComponent,
    ImageCropperComponent,
    OwlCarouselComponent,
    AnimateOwlComponent,
    AutoHeightOwlComponent,
    AutoPlayOwlComponent,
    AutoWidthOwlComponent,
    BasicOwlComponent,
    CenterOwlComponent,
    EventsOwlComponent,
    LazyLoadOwlComponent,
    MergeOwlComponent,
    MouseWheelOwlComponent,
    NavigationsOwlComponent,
    ResponsiveOwlComponent,
    RightToLeftOwlComponent,
    StagePaddingOwlComponent,
    PagignationComponent,
    PaginationActiveDisabledComponent,
    PaginationAlignmentComponent,
    PaginationColorComponent,
    PaginationIconsComponent,
    PaginationSizingComponent,
    RangeSliderComponent,
    RatingComponent,
    RibbonsComponent,
    StepsComponent,
    DefaultPearlsStepsComponent,
    DefaultStepComponent,
    PearlsStepIconComponent,
    PearlsStepSizingComponent,
    PearlsStepStatesComponent,
    StepIconComponent,
    StepSizingComponent,
    StepStatesComponent,
    VerticalStepComponent,
    StickyComponent,
    SweetAlert2Component,
    Timeline1Component,
    TourComponent,
    CommonProfileCardComponent,
  ],
  imports: [
    CommonModule,
    BonusUiRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    UsersModule,

    CarouselModule,
    NgxDropzoneModule,
    NgxSliderModule,
    ImageCropperModule,
    FontAwesomeModule,
  ],
})
export class BonusUiModule {}
