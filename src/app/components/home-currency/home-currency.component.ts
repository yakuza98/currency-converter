import {Component, OnInit} from '@angular/core';
import {IRate, IRateData} from "../../core/interfaces/rate-interfaces.services";
import {ApiServiceService} from "../../core/services/api-service.service";

@Component({
  selector: 'app-home-currency',
  templateUrl: './home-currency.component.html',
  styleUrls: ['./home-currency.component.scss']
})
export class HomeCurrencyComponent implements OnInit{

  public amount1: number;
  public amount2: number;
  private rates1: IRate;
  private rates2: IRate;
  public currencies: string[];
  constructor(private apiService: ApiServiceService) {}

  ngOnInit():void {
    this.fetchExchangeRate();
  }

  convertCurrency(event: Event, type: number): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const currencyValue: string = target.value;
    this.apiService.getCurrencyConversion(currencyValue).subscribe(
      (data: IRateData): void => {
        this['rates' + type] = {
          data,
          selectedCurrency: currencyValue,
        };
        this.changeInput(type, event);
      }
    );
  }
  fetchExchangeRate(): void {
    this.apiService.getCurrencyConversion('UAH').subscribe(
      (data: IRateData): void => {
        this.rates1 = {
          data,
          selectedCurrency: 'UAH',
        };
        this.rates2 = {
          data,
          selectedCurrency: 'UAH',
        };
        const availableCurrencies: string[] = ['USD', 'EUR', 'UAH'];
        this.currencies = ['UAH', ...Object.keys(data.rates).filter((currency: string) => availableCurrencies.includes(currency))];
      }
    );
  }
  changeInput(type: number, event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this['amount' + type] = parseFloat(target.value);
    switch (type) {
      case 1:
        this['amount' + 2] = this['rates' + type].data.rates[this.rates2.selectedCurrency] * this['amount' + 1] || 0;
        break;
      case 2:
        this['amount' + 1] = this['rates' + type].data.rates[this.rates1.selectedCurrency] * this['amount' + 2] || 0;
        break;
    }
  }
}
