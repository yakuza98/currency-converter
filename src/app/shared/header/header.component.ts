import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../core/services/api-service.service";
import {IRateData} from "../../core/interfaces/rate-interfaces.services";
import {headerImages} from "../../core/constants/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public exchangeRate: number;
  public exchangeRateEur: number;
  constructor(private apiService: ApiServiceService) {}
  ngOnInit() {
    this.fetchExchangeRate()
  }
  fetchExchangeRate():void {
    this.apiService.getCurrencyConversion('UAH').subscribe(
      (data:IRateData): void => {
        this.exchangeRate = data.rates.UAH / data.rates.USD;
        this.exchangeRateEur = data.rates.UAH / data.rates.EUR;
      })
  }

  protected readonly headerImages = headerImages;
}
