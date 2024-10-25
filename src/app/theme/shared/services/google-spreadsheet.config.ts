import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class GoogleSpreadSheetService {
    CallAPIURL: any;
    ActiveAPIURL: any;
    LeadAPIURL: any;
    constructor(private http: HttpClient) {
        this.CallAPIURL = "https://script.google.com/macros/s/AKfycbyx1xbSBwQ86dTSeyeJUX0O87fcHuVXcQkmnDmjkXy8xpZ9_f9T8herNfzeP5OE0XYA/exec";
        this.ActiveAPIURL = "https://script.google.com/macros/s/AKfycby7YRlUIMTq6Ec7mpMC4DQjiQUuCpvxX1IZYvfS_H6gG7RtmVbN16RvqqXnc6zqY-SA/exec";
        this.LeadAPIURL = "https://script.google.com/macros/s/AKfycbw3DyufF6SYXv0xn3SVxys9jEeMTkpluqNHoKrD6DmveKAm3TFUMYbIw8XemZ4LpLdG/exec";

    }

    getCallsSpreadSheetValue(): Observable<any> {
        return this.http.get(this.CallAPIURL);
    }

    getActiveSpreadSheetValue(): Observable<any> {
        return this.http.get(this.ActiveAPIURL);
    }

    getLeadSpreadSheetValue(): Observable<any> {
        return this.http.get(this.LeadAPIURL);
    }

}