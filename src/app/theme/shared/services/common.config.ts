export class DatepickerOpts {
    startDate: Date;
    autoclose = true;
    enableOnReadonly = true;
    todayHighlight = true;
    assumeNearbyYear = true;
    format = "M d, yyyy";
    placeholder = " ";
    endDate: Date;    
    todayBtn: string | boolean;
    container: string ;
    defaultViewDate: string | Date;
    daysOfWeekDisabled: String;
    constructor(        
        StartDate: Date = new Date(1970, 1, 1),
        EndDate: Date = new Date(),
        TodayBtn: string | boolean = "",
        Container: string = "",
        DaysOfWeekDisabled: string = "",
        enableOnReadonly: boolean = true,
        defaultViewDate: string | Date = ""
    ) {
        this.startDate = StartDate;
        this.endDate = EndDate;        
        if (TodayBtn !== "") {
            this.todayBtn = TodayBtn;
        }
        if (Container !== "") {
            this.container = Container;
        }
        if (DaysOfWeekDisabled !== "") {
            this.daysOfWeekDisabled = DaysOfWeekDisabled;
        }
        if (defaultViewDate) {
            this.defaultViewDate = defaultViewDate;
        }
        this.enableOnReadonly = enableOnReadonly;
    }
}
export interface Providers {
    PhoneNo;
    SubscriptionDate;
    ServiceProvider;
    Plan;
    ServiceType;
    Services;
    Location;
  }