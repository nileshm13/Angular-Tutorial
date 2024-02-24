import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ErrorModel } from "../Models/ErrorModel";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    http: HttpClient = inject(HttpClient);
    firebaseURL: string = 'https://angularhttp-c69fb-default-rtdb.firebaseio.com';

    addErrorLogs(err: ErrorModel)
    {
        return this.http.post(this.firebaseURL+'/logs.json', err);
    }

    fetchErrorLog()
    {
        return this.http.get(this.firebaseURL + '/logs.json');
    }
}