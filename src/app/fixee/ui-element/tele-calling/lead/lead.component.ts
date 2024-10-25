import { Component, Injectable, AfterViewInit, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GoogleSpreadSheetService } from 'src/app/theme/shared/services/google-spreadsheet.config';
declare var $: any;
import * as moment from "moment";
import { Chart } from 'chart.js';


@Injectable({ providedIn: "root" })
@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.scss'
})
export default class LeadComponent implements OnInit, AfterViewInit {
  
  leadDataResult:any;

  constructor(
    private spreadsheetService: GoogleSpreadSheetService
  ) {    
  }

  ngOnInit(): void {    
  }

  ngAfterViewInit(): void {
    this.spreadsheetService.getLeadSpreadSheetValue().subscribe((result)=>{
      result.data.forEach((element: any)=>{
        let DateValue = element.Date;
        element.Date = moment(DateValue).format("YYYY-MM-DD");
      });
      this.leadDataResult = result.data;
      this.renderPivotTable();
    });    
  }

  renderPivotTable() {
    const chartJsRenderer = (pivotData: any) => {
      // Remove any existing canvas if already rendered
      $('#output').empty();

      // Create a canvas element for Chart.js
      const canvas = $('<canvas>')
        .appendTo('#output')
        .get(0) as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      // Extract row and column labels and aggregated values
      const labels = pivotData.rowKeys.map((row: any) => row.join('-'));
      const datasets = pivotData.colKeys.map((col: any, i: number) => {
        return {
          label: col.join('-'),
          data: pivotData.getRowTotals().map((row: any) => row.value()),
          backgroundColor: `rgba(${100 + i * 50}, ${200 - i * 40}, ${150 + i * 30}, 0.6)`
        };
      });

      // Create Chart.js chart
      new Chart(ctx!, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    // $('#pivot-table-container').pivot(this.leadDataResult, {
    //   rows: ['Assignto'], // Rows for the pivot
    //   cols: ['Date','Status'],   // Columns for the pivot
    //   aggregatorName: 'Sum',
    //   vals: ['PhoneNumber'],    // Values to aggregate
    //   rendererName: 'Table' // You can choose Table, Bar Chart, etc.
    // });

    $('#pivot-table-container').pivot(this.leadDataResult, {
      rows: ['Assignto'], // Rows for the pivot
      cols: ['Date','Status'],   // Columns for the pivot
      aggregatorName: 'Sum',
      vals: ['PhoneNumber'],    // Values to aggregate
      renderers: {
        'Chart.js': chartJsRenderer
      },
      rendererName: 'Chart.js' // You can choose Table, Bar Chart, etc.
    });
  }

}
