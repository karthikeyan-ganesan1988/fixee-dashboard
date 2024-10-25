import { Component, Injectable } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GoogleSpreadSheetService } from 'src/app/theme/shared/services/google-spreadsheet.config';
import { ExportCSVService } from 'src/app/theme/shared/services/export-csv.service';
import { Table } from "primeng/table";
import * as moment from "moment";

@Injectable({ providedIn: "root" })
@Component({
  selector: 'app-calls',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.scss'
})
export default class CallsComponent {
  calloption: any;
  callOptionValue: string = "";
  inputValue: string = "";
  optionStatus: boolean = true;
  inputValueStatus: boolean = true;
  callsDetails: any;
  emptyGrid: boolean = true;
  constructor(
    private spreadsheetService: GoogleSpreadSheetService,
    private exportCSVService: ExportCSVService
  ) { }

  callOptionInfo(event: Event): any {
    this.callOptionValue = (event.target as HTMLInputElement).value;
    this.optionStatus = this.callOptionValue != "" ? false : true;
  }

  submitCallsReport() { 
    this.getCallDataValue(this.callOptionValue, this.inputValue);
  }

  private getCallDataValue(option: any,inputText: string){
    if(option!="" && inputText!=""){
      this.spreadsheetService.getCallsSpreadSheetValue().subscribe((result)=>{
        this.emptyGrid = false;        
        if(option == "phoneNo"){
          result.data = (result.data.filter((item)=>item.PhoneNumber==inputText));  
        }
        if(option == "category"){
          result.data = (result.data.filter((item)=>item.Category.toLowerCase()==inputText));  
        }
        if(option == "status"){
          result.data = (result.data.filter((item)=>item.Status.toLowerCase()==inputText));  
        }
        if(result.data == null || result.data == undefined || result.data.length == 0){
          this.emptyGrid = true;
          alert("Please enter the valid data");          
        }
        else{
          result.data.forEach((element: any)=>{
            let DateValue = element.Date;
            element.Date = moment(DateValue).format("YYYY-MM-DD");
          });
          this.callsDetails = result.data;
        }        
      });
    }

  }

  inputValueInfo(event: Event): any {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.inputValueStatus = this.inputValue != "" ? false : true;
  }

  exportFile(e: Table){
    let fileName = "Fixee_TeleCallingStatusList";
    return this.exportCSVService.generateCSVDownloadLink({
      data: this.callsDetails,
      columns: [
        {
          label: 'Date',
          value: 'Date'
        },
        {
          label: 'Phone Number',
          value: 'PhoneNumber'
        },
        {
          label: 'Category',
          value: 'Category'
        },
        {
          label: 'Sub-Category',
          value: 'SubCategory'
        },
        {
          label: 'Assign to',
          value: 'Assignto'
        },
        {
          label: 'Status',
          value: 'Status'
        },
        {
          label: 'Name',
          value: 'Name'
        },
        {
          label: 'Service Type',
          value: 'ServiceType'
        },
        {
          label: 'Area',
          value: 'Area'
        }
      ]
    }, fileName);
  }

}
