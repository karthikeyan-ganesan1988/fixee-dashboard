import { Injectable } from "@angular/core";
import * as json2csv from "json2csv";

@Injectable({ providedIn: "root" })
export class ExportCSVService {
    generateCSVDownloadLink(options: { data: any[]; columns: any[] }, filename: string) {
        const exportFileName = filename + ".csv";
        const fields = options.columns;
        const opts = { fields, output: exportFileName, excelStrings: true, withBOM: true };
        const csv = json2csv.parse(options.data, opts);
        const blob = new Blob([csv], { type: "text/csv" });
        const navigator = window.navigator as any;
        if (window.navigator && navigator.msSaveOrOpenBlob) {
            // in case for IE
            navigator.msSaveOrOpenBlob(blob, exportFileName);
        } else {
            // all other browsers
            const hiddenElement = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            hiddenElement.href = url;
            hiddenElement.download = exportFileName;
            hiddenElement.click();
            window.URL.revokeObjectURL(url);
            hiddenElement.remove();
        }
    }
}