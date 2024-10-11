import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DatepickerOpts, Providers } from 'src/app/theme/shared/services/common.config';
import { ExportCSVService } from 'src/app/theme/shared/services/export-csv.service';
import * as moment from "moment";
import { Table } from "primeng/table";
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({ providedIn: "root" })
@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export default class ProvidersComponent implements OnInit, OnDestroy {
  datepickerStartDateOptions: any;
  datepickerEndDateOptions: any;
  startDate = "";
  endDate = "";
  endDateWarning: boolean = false;
  endDatepicker: Date;
  startDatepicker: Date;
  phoneNumber: number;
  PhoneNo: string = "";
  planType: any;
  planTypeValue: string = "";
  data: Providers[];
  basicProviderDetails: any;
  FromDate = "";
  ToDate = "";
  emptyGrid: boolean = false;

  constructor(private exportCSVService: ExportCSVService, private http: HttpClient) {
    this.datepickerStartDateOptions = new DatepickerOpts(
      new Date(1900, 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 0, 0),
      "linked"
    );
    this.datepickerEndDateOptions = new DatepickerOpts(
      new Date(1900, 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 0, 0),
      "linked"
    );
  }

  ngOnInit(): void {
    this.data = [
      { "PhoneNo": "9715080033", "SubscriptionDate": "2024-09-22", "ServiceProvider": "Basic", "Plan": "Monthly", "ServiceType": "Bussiness", "Services": "Web Designer", "Location": "Chennai" },
      { "PhoneNo": "9955678930", "SubscriptionDate": "2024-09-27", "ServiceProvider": "Basic", "Plan": "Monthly", "ServiceType": "Individual", "Services": "Electrican", "Location": "Madurai" },
      { "PhoneNo": "9789862693", "SubscriptionDate": "2024-09-28", "ServiceProvider": "Basic", "Plan": "Quarterly", "ServiceType": "Individual", "Services": "Acting Driver", "Location": "Chennai" },
      { "PhoneNo": "9710033085", "SubscriptionDate": "2024-10-01", "ServiceProvider": "Basic", "Plan": "Yearly", "ServiceType": "Bussiness", "Services": "Marketing", "Location": "Madurai" },
    ]
  }

  ngOnDestroy(): void {

  }

  phoneInfo(event: Event): any {
    this.PhoneNo = (event.target as HTMLInputElement).value;
  }

  planTypeInfo(event: Event): any {
    this.planTypeValue = (event.target as HTMLInputElement).value;
  }

  startDateChange(event: any) {
    if (event) {
      let date = moment(event).format("YYYY-MM-DD");
      this.FromDate = date;
      date = date.replace(/-/, "").replace(/-/, "");
      this.startDate = date;
      this.endDateWarning = false;
      if (this.endDate !== "") {
        if (parseInt(this.endDate.substr(0, 4), 10) < parseInt(this.startDate.substr(0, 4), 10)) {
          this.endDateWarning = true;
        }
        if (parseInt(this.endDate.substr(0, 4), 10) == parseInt(this.startDate.substr(0, 4), 10)) {
          if (parseInt(this.endDate.substr(4, 2), 10) < parseInt(this.startDate.substr(4, 2), 10)) {
            this.endDateWarning = true;
          }
          if (parseInt(this.endDate.substr(4, 2), 10) === parseInt(this.startDate.substr(4, 2), 10)) {
            if (parseInt(this.endDate.substr(6, 2), 10) < parseInt(this.startDate.substr(6, 2), 10)) {
              this.endDateWarning = true;
            }
          }
        }
      }
    }
    else {
      this.startDate = "";
      this.endDate = "";
    }
  }

  endDateChange(event: any) {
    if (event) {
      let date = moment(event).format("YYYY-MM-DD");
      this.ToDate = date;
      date = date.replace(/-/, "").replace(/-/, "");
      this.endDate = date;
      this.endDateWarning = false;
      if (this.startDate !== "") {
        if (parseInt(this.endDate.substr(0, 4), 10) < parseInt(this.startDate.substr(0, 4), 10)) {
          this.endDateWarning = true;
        }
        if (parseInt(this.endDate.substr(0, 4), 10) == parseInt(this.startDate.substr(0, 4), 10)) {
          if (parseInt(this.endDate.substr(4, 2), 10) < parseInt(this.startDate.substr(4, 2), 10)) {
            this.endDateWarning = true;
          }
          if (parseInt(this.endDate.substr(4, 2), 10) === parseInt(this.startDate.substr(4, 2), 10)) {
            if (parseInt(this.endDate.substr(6, 2), 10) < parseInt(this.startDate.substr(6, 2), 10)) {
              this.endDateWarning = true;
            }
          }
        }
      }
    }
    else {
      this.startDate = "";
      this.endDate = "";
    }
  }

  submitBasicReport() {
    this.getProviderDetails(this.PhoneNo, this.FromDate, this.ToDate, this.planTypeValue);
  }

  private getProviderDetails(phoneNumber: any, fromDate: any, toDate: any, subType: any) {
    this.basicProviderDetails = [];
    let filteredItems: any = [];
    if (subType == "All") {
      filteredItems = this.data;
    }
    else {
      filteredItems = this.data.filter((item)=>item.PhoneNo==phoneNumber||(item.SubscriptionDate>=fromDate && item.SubscriptionDate<=toDate)||item.Plan==subType);
      let url: any;
      //url = "https://fake-json-api.mock.beeceptor.com/users";
      url="https://asia-south1-projectx-f917c.cloudfunctions.net/getUser";
      let body = JSON.stringify({ body: phoneNumber });
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type":"application/json",
          "Access-Control-Allow-Origin":"*"
        })
      };
      this.http.post<any>(url,body).subscribe(async res => {
        console.log(res);
        console.log(JSON.stringify(res));

      }, async (error) => {
        console.log(error);
      });
    }

    this.emptyGrid = filteredItems.length > 0 ? true : false;
    this.basicProviderDetails = filteredItems;
  }

  exportFile(e: Table) {
    let fileName = "Fixee_BasicProviderList";
    return this.exportCSVService.generateCSVDownloadLink({
      data: this.basicProviderDetails,
      columns: [
        {
          label: 'Mobile Number',
          value: 'PhoneNo'
        },
        {
          label: 'Subscription Date',
          value: 'SubscriptionDate'
        },
        {
          label: 'Plan',
          value: 'Plan'
        },
        {
          label: 'Service Type',
          value: 'ServiceType'
        },
        {
          label: 'Services',
          value: 'Services'
        },
        {
          label: 'Location',
          value: 'Location'
        },
      ]
    }, fileName);
  }

}


