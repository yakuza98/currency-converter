export interface IRateData {
  rates: {
    UAH: number;
    USD: number;
    EUR: number;
  };
}

export interface IRate {
  data: IRateData;
  selectedCurrency: string;
}
