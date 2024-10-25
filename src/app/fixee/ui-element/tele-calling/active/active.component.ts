import { Component, Injectable } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GoogleSpreadSheetService } from 'src/app/theme/shared/services/google-spreadsheet.config';
import { ExportCSVService } from 'src/app/theme/shared/services/export-csv.service';
import { Table } from "primeng/table";
import * as moment from "moment";

@Injectable({ providedIn: "root" })
@Component({
  selector: 'app-active',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export default class ActiveComponent {
  activeoption: any;
  activeOptionValue: string = "";
  inputValue: string = "";
  optionStatus: boolean = true;
  inputValueStatus: boolean = true;
  activeDetails: any;
  emptyGrid: boolean = true;

  constructor(
    private spreadsheetService: GoogleSpreadSheetService,
    private exportCSVService: ExportCSVService
  ){}

  activeOptionInfo(event: Event): any {
    this.activeOptionValue = (event.target as HTMLInputElement).value;
    this.optionStatus = this.activeOptionValue != "" ? false : true;
  }

  submitActiveReport() { 
    this.getActiveDataValue(this.activeOptionValue, this.inputValue);
  }

  private getActiveDataValue(option: any,inputText: string){
    if(option!="" && inputText!=""){
      this.spreadsheetService.getActiveSpreadSheetValue().subscribe((result)=>{
        this.emptyGrid = false;        
        if(option == "phoneNo"){
          result.data = (result.data.filter((item)=>item.PhoneNumber==inputText));  
        }
        if(option == "subscription"){
          result.data = (result.data.filter((item)=>item.PlanName.toLowerCase().includes(inputText)));  
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
          this.activeDetails = result.data;
        }        
      });
    }

  }

  inputValueInfo(event: Event): any {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.inputValueStatus = this.inputValue != "" ? false : true;
  }

  exportFile(e: Table){
    let fileName = "Fixee_Telemarket_ActiveStatusList";
    return this.exportCSVService.generateCSVDownloadLink({
      data: this.activeDetails,
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
          label: 'Plan Name',
          value: 'PlanName'
        },
        {
          label: 'Plan Amount',
          value: 'PlanAmount'
        },
        {
          label: 'Assign to',
          value: 'Assignto'
        },
        {
          label: 'Status',
          value: 'Status'
        }        
      ]
    }, fileName);
  }

}
