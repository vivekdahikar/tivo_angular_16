import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { AreaSpalineComponent } from './apex-chart/area-spaline/area-spaline.component';
import { BarChartComponent } from './apex-chart/bar-chart/bar-chart.component';
import { BasicAreaComponent } from './apex-chart/basic-area/basic-area.component';
import { BubbleChartComponent } from './apex-chart/bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './apex-chart/candlestick-chart/candlestick-chart.component';
import { ColumnChartComponent } from './apex-chart/column-chart/column-chart.component';
import { ColumnChart2Component } from './apex-chart/column-chart2/column-chart2.component';
import { DonuttChartComponent } from './apex-chart/donutt-chart/donutt-chart.component';
import { MixedChartComponent } from './apex-chart/mixed-chart/mixed-chart.component';
import { PieChartComponent } from './apex-chart/pie-chart/pie-chart.component';
import { RadarChartComponent } from './apex-chart/radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './apex-chart/radial-bar-chart/radial-bar-chart.component';
import { SteplineChartComponent } from './apex-chart/stepline-chart/stepline-chart.component';
import { Chart1Component } from './chartist-chart/chart1/chart1.component';
import { Chart2Component } from './chartist-chart/chart2/chart2.component';
import { Chart3Component } from './chartist-chart/chart3/chart3.component';
import { Chart4Component } from './chartist-chart/chart4/chart4.component';
import { Chart5Component } from './chartist-chart/chart5/chart5.component';
import { Chart6Component } from './chartist-chart/chart6/chart6.component';
import { Chart7Component } from './chartist-chart/chart7/chart7.component';
import { Chart8Component } from './chartist-chart/chart8/chart8.component';
import { Chart9Component } from './chartist-chart/chart9/chart9.component';
import { Chart10Component } from './chartist-chart/chart10/chart10.component';
import { Chart11Component } from './chartist-chart/chart11/chart11.component';
import { Chart12Component } from './chartist-chart/chart12/chart12.component';
import { AreaChart1Component } from './google-chart/area-chart1/area-chart1.component';
import { AreaChart2Component } from './google-chart/area-chart2/area-chart2.component';
import { BarChart2Component } from './google-chart/bar-chart2/bar-chart2.component';
import { ColumnChart1Component } from './google-chart/column-chart1/column-chart1.component';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component';
import { PieChart1Component } from './google-chart/pie-chart1/pie-chart1.component';
import { PieChart2Component } from './google-chart/pie-chart2/pie-chart2.component';
import { PieChart3Component } from './google-chart/pie-chart3/pie-chart3.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartistModule } from 'ng-chartist';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApexChartComponent,
    ChartistChartComponent,
    ChartjsComponent,
    GoogleChartComponent,
    AreaSpalineComponent,
    BarChartComponent,
    BasicAreaComponent,
    BubbleChartComponent,
    CandlestickChartComponent,
    ColumnChartComponent,
    ColumnChart2Component,
    DonuttChartComponent,
    MixedChartComponent,
    PieChartComponent,
    RadarChartComponent,
    RadialBarChartComponent,
    SteplineChartComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
    Chart5Component,
    Chart6Component,
    Chart7Component,
    Chart8Component,
    Chart9Component,
    Chart10Component,
    Chart11Component,
    Chart12Component,
    AreaChart1Component,
    AreaChart2Component,
    BarChart2Component,
    ColumnChart1Component,
    ComboChartComponent,
    LineChartComponent,
    PieChart1Component,
    PieChart2Component,
    PieChart3Component,
  ],

  imports: [
    CommonModule,
    ChartsRoutingModule,
    Ng2GoogleChartsModule,
    ChartistModule,
    NgApexchartsModule,
    SharedModule,
    FormsModule,
  ],
})
export class ChartsModule {}
