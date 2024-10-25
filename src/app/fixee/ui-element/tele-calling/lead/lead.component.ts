import { Component, Injectable, AfterViewInit, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GoogleSpreadSheetService } from 'src/app/theme/shared/services/google-spreadsheet.config';
declare var $: any;
import * as moment from "moment";


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
    $('#pivot-table-container').pivot(this.leadDataResult, {
      rows: ['Assignto'], // Rows for the pivot
      cols: ['Date','Status'],   // Columns for the pivot
      aggregatorName: 'Sum',
      vals: ['PhoneNumber'],    // Values to aggregate      
      rendererName: 'Table' // You can choose Table, Bar Chart, etc.
    });
    
  }

}
