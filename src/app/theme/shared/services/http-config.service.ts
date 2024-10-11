import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HTTPConfigurationServices {
    url: any;
    httpOptions: any;
    constructor(private http: HttpClient) {
        this.url = "https://asia-south1-projectx-f917c.cloudfunctions.net/getUser";
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }
    }
    httpServiceConfig(body: any) {
        return this.http.post<any>(this.url, body, this.httpOptions).subscribe(async res => {
            console.log(res);
            console.log(JSON.stringify(res));

        }, async (error) => {
            console.log(error);
        });
    }
}