// angular import
import { Component, ViewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ApexTheme, NgApexchartsModule } from 'ng-apexcharts';
import { ProductSaleComponent } from './product-sale/product-sale.component';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexMarkers
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  markers: ApexMarkers;
  theme: ApexTheme;
};

@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, ProductSaleComponent],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export default class DashAnalyticsComponent {
  // public props
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('customerChart') customerChart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  chartOptions_1!: Partial<ChartOptions>;
  chartOptions_2!: Partial<ChartOptions>;
  

  // constructor
  constructor() {
    this.chartOptions = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Payments',
          data: [20, 50, 30]
        },
        {
          name: 'Subscription',
          data: [60, 30, 65]
        }
      ],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['09/10', '09/20', '10/05'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      colors: ['#73b4ff', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      }
    };
    this.chartOptions_1 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [39, 10],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#4680ff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };
    this.chartOptions_2 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Cancel'],
      series: [25, 10],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#fff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };    
  }
  cards = [
    {
      background: 'bg-c-blue',
      title: 'Calls',
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '351',
      pendingno: '486',
    },
    {
      background: 'bg-c-green',
      title: 'Conversion',      
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '156',
      pendingno: '105',      
    },
    {
      background: 'bg-c-yellow',
      title: 'Enquiry',
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '230',
      pendingno: '97',
    },
    {
      background: 'bg-c-red',
      title: 'Complaint',
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '180',
      pendingno: '320',
    }
  ];

  subscriptioncards = [
    {
      background: 'bg-c-red',
      title: 'Halted',
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '20',
      pendingno: '63',
    },
    {
      background: 'bg-c-yellow',
      title: 'Basic',      
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '146',
      pendingno: '676',      
    },
    {
      background: 'bg-c-green',
      title: 'Canceled',      
      completedtext: 'Completed',
      pendingtext: 'Pending',
      completedno: '36',
      pendingno: '40',      
    }

  ];

  images = [
    {
      src: 'assets/images/gallery-grid/img-grd-gal-1.jpg',
      title: 'Old Scooter',
      size: 'PNG-100KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-2.jpg',
      title: 'Wall Art',
      size: 'PNG-150KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-3.jpg',
      title: 'Microphone',
      size: 'PNG-150KB'
    }
  ];
}
