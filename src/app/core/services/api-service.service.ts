import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRateData} from "../interfaces/rate-interfaces.services";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}
  getCurrencyConversion(currency: string):Observable<IRateData> {
    const url: string = `https://api.exchangerate.host/latest?base=${currency}`;
    return this.http.get<IRateData>(url);
  }
}
