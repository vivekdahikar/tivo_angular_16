import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BasicTablesComponent } from './bootstrap-tables/basic-tables/basic-tables.component';
import { BasicTableComponent } from './bootstrap-tables/basic-tables/basic-table/basic-table.component';
import { BreckpointComponent } from './bootstrap-tables/basic-tables/breckpoint/breckpoint.component';
import { CaptionComponent } from './bootstrap-tables/basic-tables/caption/caption.component';
import { CommonBorderTableComponent } from './bootstrap-tables/basic-tables/common-border-table/common-border-table.component';
import { CommonSizingTableComponent } from './bootstrap-tables/basic-tables/common-sizing-table/common-sizing-table.component';
import { ContextualClassesComponent } from './bootstrap-tables/basic-tables/contextual-classes/contextual-classes.component';
import { CustomWithHoverComponent } from './bootstrap-tables/basic-tables/custom-with-hover/custom-with-hover.component';
import { HeadOptionsComponent } from './bootstrap-tables/basic-tables/head-options/head-options.component';
import { HoverableRowsComponent } from './bootstrap-tables/basic-tables/hoverable-rows/hoverable-rows.component';
import { InversePrimaryBgComponent } from './bootstrap-tables/basic-tables/inverse-primary-bg/inverse-primary-bg.component';
import { InverseTableComponent } from './bootstrap-tables/basic-tables/inverse-table/inverse-table.component';
import { ResponsiveTablesComponent } from './bootstrap-tables/basic-tables/responsive-tables/responsive-tables.component';
import { StripedRowComponent } from './bootstrap-tables/basic-tables/striped-row/striped-row.component';
import { StripedInverseComponent } from './bootstrap-tables/basic-tables/striped-inverse/striped-inverse.component';
import { TextBgUtilitiesComponent } from './bootstrap-tables/basic-tables/text-bg-utilities/text-bg-utilities.component';
import { BasicInitComponent } from './data-tables/basic-init/basic-init.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbdSortableHeader } from 'src/app/shared/directive/sortable.directive';

@NgModule({
  declarations: [
    BasicTablesComponent,
    BasicTableComponent,
    BreckpointComponent,
    CaptionComponent,
    CommonBorderTableComponent,
    CommonSizingTableComponent,
    ContextualClassesComponent,
    CustomWithHoverComponent,
    HeadOptionsComponent,
    HoverableRowsComponent,
    InversePrimaryBgComponent,
    InverseTableComponent,
    ResponsiveTablesComponent,
    StripedRowComponent,
    NgbdSortableHeader,

    StripedInverseComponent,
    TextBgUtilitiesComponent,
    BasicInitComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    DecimalPipe,
  ],
  exports: [BasicTablesComponent],
})
export class TablesModule {}
