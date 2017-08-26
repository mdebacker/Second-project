import { Injectable } from '@angular/core';
import { IContact } from "./contact";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from "@angular/common/http";
import { URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()

export class ContactService {

    private _contactUrl = ' https://www.usa.gov/api/USAGovAPI/corporate/contacts.json/contacts';

    constructor(private _http: HttpClient){

    }

    getContacts(searchParm: string): Observable<IContact[]>
    {
        let tempHeaders  = new HttpHeaders({ 'Content-Type': 'application/json', });

        let tempParams: HttpParams= new HttpParams();
        tempParams.append('Name', searchParm);

        return this._http.get<IContact[]>
        (this._contactUrl,
         {headers: tempHeaders, params: tempParams})
         .do(data => console.log('Data: '+ JSON.stringify(data))).catch(this.handleError);  
    }

    private handleError(err: HttpErrorResponse)
    {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}