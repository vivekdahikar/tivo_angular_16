import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-chart',
        component: ApexChartComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'google-chart',
        component: GoogleChartComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'chartjs',
        component: ChartjsComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'chartist-chart',
        component: ChartistChartComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
