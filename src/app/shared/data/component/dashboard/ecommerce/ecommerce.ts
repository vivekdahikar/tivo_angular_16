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
} from "ng-apexcharts";

let primary_color = localStorage.getItem('primary_color') || '#5c61f2';
let success_color = localStorage.getItem('success_color') || '#67C100';
let secondary_color = localStorage.getItem('secondary_color') || '#FFA47A';
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

export const profit = {
  title: 'Our Total Profit',
  sale: '$8,55,462',
  percent: '79.21%',
  caption: 'More Than last month',
  icon: 'usd',
  color: 'primary',
  card: 'profit',
};
export const visitor = {
  title: 'Our Total Visitor',
  sale: '813K',
  percent: '86.94%',
  caption: 'More Than last month',
  icon: 'user',
  color: 'info',
  card: 'visitor',
};
export const sold = {
  title: 'Our Total Sold',
  sale: '2,41,658',
  percent: '94.40%',
  caption: 'Look Pretty Good',
  icon: 'shopping-basket',
  color: 'success',
  card: 'sell',
};
export const Totalsold = [
  {
    img: "assets/images/dashboard-2/dash-2/01.png",
    name: "Ossim keter",
    year: "2022",
    date: "16 August",
    product: "Clothes",
    price: "$1,58,652",
  },
  {
    img: "assets/images/dashboard-2/dash-2/02.png",
    name: "Venter loren",
    year: "2021",
    date: "21 Sept",
    product: "Shoes",
    price: "$95,025",
  },
  {
    img: "assets/images/dashboard-2/dash-2/03.png",
    name: "Fran Loain",
    year: "2022",
    date: "06 March",
    product: "Electronics",
    price: "$90,155",
  },
  {
    img: "assets/images/dashboard-2/dash-2/04.png",
    name: "Loften Horen",
    year: "2021",
    date: "12 February",
    product: "Watch",
    price: "$80,658",
  },
  {
    img: "assets/images/dashboard-2/dash-2/05.png",
    name: "Loie fenter",
    year: "2022",
    date: "30 January",
    product: "Jewellery",
    price: "$50,652",
  },
];

export const SellingProduct = [
  {
    img: "assets/images/dashboard-2/product/1.png",
    name: "Nike Shoes",
    quant: "451",
    price: "49.00",
  },
  {
    img: "assets/images/dashboard-2/product/2.png",
    name: "Headphone",
    quant: "1657",
    price: "28.00",
  },
  {
    img: "assets/images/dashboard-2/product/3.png",
    name: "Tree Pot",
    quant: "32",
    price: "30.00",
  },
  {
    img: "assets/images/dashboard-2/product/4.png",
    name: "Black Purse",
    quant: "663",
    price: "22.00",
  },
  {
    img: "assets/images/dashboard-2/product/5.png",
    name: "Ck Watch<",
    quant: "4785",
    price: "48.00",
  },
  {
    img: "assets/images/dashboard-2/product/6.png",
    name: "New T-shirt",
    quant: "9",
    price: "69.00",
  },
  {
    img: "assets/images/dashboard-2/product/7.png",
    name: "Jewellery",
    quant: "7878",
    price: "78.00",
  },
  {
    img: "assets/images/dashboard-2/product/8.png",
    name: "Smart Phone",
    quant: "987",
    price: "36.00",
  },
];
export const orderList = [
  {
    sr: "1",
    id: "#456861",
    status: "Moving",
    name: "Ossim Keter",
    date: "16 August",
    adress: "Green Bay, Wisconsin, London",
    price: "450.00",
  },
  {
    sr: "2",
    id: "#846953",
    status: "Moving",
    name: "Venter Loren",
    date: "21 September",
    adress: "Summerlin, Nevada, United kingdom",
    price: "136.00",
  },
  {
    sr: "3",
    id: "#197568",
    status: "Cancel",
    name: "Fran Loain",
    date: "06 March",
    adress: "Atlantic City, New Jersey, UK",
    price: "624.00",
  },
  {
    sr: "4",
    id: "#647953",
    status: "Pending",
    name: "Loften Horen",
    date: "12 February",
    adress: "Fort Worth, Soun Di, Texas, USA",
    price: "48.00",
  },
  {
    sr: "5",
    id: "#447495",
    status: "Moving",
    name: "Loie Fenter",
    date: "12 February",
    adress: "Green Bay, Wisconsin, London",
    price: "258.00",
  },
];

export let goalchart: ChartOptions | any = {
  series: [75],
  chart: {
    height: 345,
    type: "radialBar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "78%",
        dropShadow: {
          enabled: false,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          color: primary_color,
          fontSize: "36px",
          fontWeight: "700",
          show: true,
        },
      },
    },
  },
  responsive: [
    {
      // breakpoint: 1551,
      // options: {
      //   chart: {
      //     height: 460,
      //   },
      // },
      // breakpoint: 1200,
      // options: {
      //   chart: {
      //     height: 340,
      //   },
      // },
      // breakpoint: 1024,
      // options: {
      //   chart: {
      //     height: 300,
      //     width: 200,
      //   },
      // },
      breakpoint: 480,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
  colors: [primary_color],
  stroke: {
    lineCap: "round",
  },
  tooltip: {
    enabled: false,
  },
};

export let orderStatics: ChartOptions | any = {
  series: [
    {
      type: "area",
      name: "Last 2 Month",
      data: [42, 40, 28, 30, 25, 30, 35, 25],
    },
    {
      type: "line",
      name: "Last 2 Days",
      data: [50, 40, 50, 45, 50, 30, 70, 60],
    },
  ],
  chart: {
    height: 320,
    type: "line",
    stacked: false,
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
  stroke: {
    width: [0, 3, 5],
    curve: "smooth",
  },
  annotations: {
    points: [
      {
        x: 8,
        y: 50,
        marker: {
          size: 4,
          fillColor: "#fff",
          strokeColor: primary_color,
          radius: 3,
        },
        label: {
          borderColor: "#ffffff",
          offsetY: 0,
          style: {
            color: primary_color,
            background: "#ffffff",
            fontSize: 16,
          },
          text: "$3.9k",
        },
      },
    ],
  },
  colors: [primary_color],
  xaxis: {
    offsetX: 0,
    offsetY: 0,
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
      format: "MM",
    },
  },
  fill: {
    type: ["gradient", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: [primary_color, "#fff5f7", primary_color],
      inverseColors: true,
      opacityFrom: 0.6,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    },
  },
  subtitle: {
    text: "If you have it, you can make anything you want look good.",
    align: "left",
    margin: 0,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "11px",
      fontWeight: "400",
      color: "#9699a2",
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
};
