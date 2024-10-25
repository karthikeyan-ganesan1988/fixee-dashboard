import { Component, Injectable, AfterViewInit, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GoogleSpreadSheetService } from 'src/app/theme/shared/services/google-spreadsheet.config';
declare var $: any;
import * as moment from "moment";
import { ChartConfiguration, ChartType } from 'chart.js';


@Injectable({ providedIn: "root" })
@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.scss'
})
export default class LeadComponent implements OnInit, AfterViewInit {

  leadDataResult: any[] = [];
  groupedByLeads: any[] = [];
  public pieChartData!: ChartConfiguration<'pie'>;
  constructor(
    private spreadsheetService: GoogleSpreadSheetService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.spreadsheetService.getLeadSpreadSheetValue().subscribe((result) => {
      result.data.forEach((element: any) => {
        let DateValue = element.Date;
        element.Date = moment(DateValue).format("YYYY-MM-DD");
      });
      this.leadDataResult = result.data;
      this.groupedByLeads = this.leadDataResult.reduce((accumulator, leadData) => {
        const Assignto = leadData.Assignto;
        if (!accumulator[Assignto]) {
          accumulator[Assignto] = [];
        }
        accumulator[Assignto].push(leadData);
        return accumulator;
      }, {});      
      const counts: { [key: string]: number } = {};
      for (const key in this.groupedByLeads) {
        if (this.groupedByLeads.hasOwnProperty(key)) {
          counts[key] = Object.keys(this.groupedByLeads[key]).length; // Count of keys in each nested object
        }
      }
      const chartKeys = this.getChartKeys(counts); 
      const chartValue = this.getChartValue(counts);
             
      this.renderPivotTable();
      this.pieChartData = {
        type: 'pie',
        data: {
          labels: chartKeys,
          datasets: [{
            data: chartValue
            
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      };
    });

  }

  getChartKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getChartValue(obj: any): number[] {
    return Object.values(obj);
  }  

  renderPivotTable() {
    $('#pivot-table-container').pivot(this.leadDataResult, {
      rows: ['Assignto'], // Rows for the pivot
      cols: ['Date', 'Status'],   // Columns for the pivot
      aggregatorName: 'Sum',
      vals: ['PhoneNumber'],    // Values to aggregate      
      rendererName: 'Table' // You can choose Table, Bar Chart, etc.
    });
  }  
}
