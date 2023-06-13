import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexResponsive,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
  ApexTheme,
  ApexMarkers,
  ApexAnnotations,
  ApexGrid,
  ApexForecastDataPoints,
  ApexNoData,
  ApexStates,
} from 'ng-apexcharts';
import { LeftContentComponent } from 'src/app/components/users/users-profile/left-content/left-content.component';

let primary_color = localStorage.getItem('primary_color') || '#5c61f2';
let success_color = localStorage.getItem('success_color') || '#67C100';
let secondary_color = localStorage.getItem('secondary_color') || '#eeb82f';
let info_color = localStorage.getItem('sinfo_color') || '#1d97ff';
let warning_color = localStorage.getItem('warning_color') || ' #E56809';

let zetaAdminConfig_primary = localStorage.getItem('primary') || '#5c61f2';

export interface ApexOptions {
  annotations?: ApexAnnotations;
  chart?: ApexChart;
  colors?: any[];
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  forecastDataPoints?: ApexForecastDataPoints;
  grid?: ApexGrid;
  labels?: string[];
  legend?: ApexLegend;
  markers?: ApexMarkers;
  noData?: ApexNoData;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  states?: ApexStates;
  stroke?: ApexStroke;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;
  title?: ApexTitleSubtitle;
  tooltip?: ApexTooltip;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
}

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
  pieseries?: ApexNonAxisChartSeries;
  title?: ApexTitleSubtitle;
  theme?: ApexTheme;
  colors?: string[];
  markers?: ApexMarkers;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
};
export let revenuchart: ChartOptions | any = {
  series: [
    {
      name: 'Revenue 1',
      data: [2, 15, 25, 20, 30, 26, 24, 15, 12, 20],
    },
    {
      name: 'Revenue 2',
      data: [10, 25, 15, 16, 10, 14, 28, 18, 20, 16],
    },
  ],
  chart: {
    height: 168,
    type: 'area',
    opacity: 1,
    toolbar: {
      show: false,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: [0.5, 0.25, 1],
  },
  stroke: {
    width: [3, 3],
    curve: 'smooth',
  },
  xaxis: {
    offsetX: 0,
    offsetY: 0,
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
    ],
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    x: {
      format: 'MM',
    },
  },
  colors: [secondary_color, primary_color],
};

//user
export let userchart: ChartOptions | any = {
  series: [99, 24, 20, 28],
  chart: {
    type: 'donut',
    height: 300,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 280,
        },
      }
    },
  ],
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return val / 100 + '$';
      },
    },
  },
  colors: [primary_color, secondary_color, secondary_color, secondary_color],
};

//earning
export let earningchart: ChartOptions | any = {
  series: [
    {
      name: 'Earning',
      data: [20, 40, 20, 65, 35, 30, 60, 35, 15],
    },
    {
      name: 'Earning',
      data: [30, 25, 10, 12, 13, 15, 10, 15, 10],
    },
  ],
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    height: 270,
    stacked: true,
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 1,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
      e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
      borderRadius: 6,
      columnWidth: '19%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    offsetX: 0,
    offsetY: 0,
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    dataLabels: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
    colors: [primary_color, '#eeeffe'],
  },
  legend: {
    show: false,
  },
};

//growth
export let growthchart: ChartOptions | any = {
  series: [
    {
      type: 'area',
      name: 'Daily',
      data: [0, 20, 10, 45, 30, 43, 25, 38, 30, 42, 25, 40, 25, 0],
      color: '#f0f1fe',
    },
    {
      type: 'area',
      name: 'Weekly',
      data: [0, 12, 6, 25, 13, 24, 15, 24, 20, 26, 16, 22, 16, 0],
      color: primary_color,
    },
    {
      type: 'line',
      name: 'Monthly',
      data: [0, 19, 14, 22, 35, 30, 35, 30, 40, 30, 39, 20, 34, 0],
      color: primary_color,
    },
  ],
  chart: {
    height: 280,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 0, 5],
    curve: 'smooth',
  },
  annotations: {
    xaxis: [
      {
        x: 300,
        strokeDashArray: 0,
        borderWidth: 3,
        borderColor: primary_color,
      },
    ],
    points: [
      {
        x: 300,
        y: 48,
        marker: {
          size: 8,
          fillColor: primary_color,
          strokeColor: primary_color,
          radius: 5,
        },
        label: {
          borderWidth: 0,
          offsetY: 0,
          text: 'We are Achieve Our Goal in Progress',
          style: {
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: 'Montserrat',
          },
        },
      },
    ],
  },
  responsive: [
    {
      breakpoint: 767,
      options: {
        chart: {
          height: 250,
        },
      },
      //   breakpoint: 575,
      //   options: {
      //     chart: {
      //       height: 220,
      //     },
      //     annotations: {
      //       xaxis: [
      //         {
      //           x: 100,
      //           strokeDashArray: 0,
      //           borderWidth: 3,
      //           borderColor: primary_color,
      //         },
      //       ],
      //       points: [
      //         {
      //           x: 100,
      //           y: 48,
      //           marker: {
      //             size: 8,
      //             fillColor: primary_color,
      //             strokeColor: primary_color,
      //             radius: 5,
      //           },
      //           label: {
      //             borderWidth: 0,
      //             offsetX: 25,
      //             text: 'We are Achieve Our Goal in Progress',
      //             style: {
      //               fontSize: '14px',
      //               fontWeight: '600',
      //               fontFamily: 'Montserrat',
      //             },
      //           },
      //         },
      //       ],
      //     },
      //   },
    },
  ],
  fill: {
    type: ['solid', 'gradient', 'gradient'],
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 1,
      gradientToColors: [secondary_color, primary_color],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 0.2,
      stops: [0, 100, 100, 100],
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    offsetX: 0,
    offsetY: 0,
    categories: [
      '11-09-2022',
      '12-09-2022',
      '13-09-2022',
      '14-09-2022',
      '15-09-2022',
      '16-09-2022',
      '17-09-2022',
      '18-09-2022',
      '19-09-2022',
      '20-09-2022',
      '21-09-2022',
      '22-09-2022',
      '23-09-2022',
      '24-09-2022',
    ],
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy',
    },
  },
  yaxis: {
    show: false,
    lines: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
  },
  legend: {
    show: false,
  },
};
export const appointment = [
  {
    img: 'assets/images/dashboard/default/01.png',
    name: 'Ossim keter',
    status: 'Now',
    date: '16 August',
    button: 'primary',
    badge: 'Pending',
  },

  {
    img: 'assets/images/dashboard/default/02.png',
    name: 'Venter loren',
    status: '1 Hour',
    date: '21 September ',
    button: 'secondary',
    badge: 'Done',
  },
  {
    img: 'assets/images/dashboard/default/03.png',
    name: 'Fran loain',
    status: '2 Day After',
    date: '06 March',
    button: 'success',
    badge: 'Pending',
  },
  {
    img: 'assets/images/dashboard/default/04.png',
    name: 'Loften Horen',
    status: 'Day End',
    date: '12 February',
    button: 'info',
    badge: 'Pending',
  },
  {
    img: 'assets/images/dashboard/default/05.png',
    name: 'Loie fenter',
    status: '2 Day After',
    date: '06 March',
    button: 'danger',
    badge: 'Pending',
  },
];
