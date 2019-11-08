import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';

export interface ICryptoCurrencyState {
    cryptoCurrencies: ICryptoCurrency[];
    selectedCryptoCurrency: ICryptoCurrency;
}

export const initialCryptoCurrencyState: ICryptoCurrencyState = {
    selectedCryptoCurrency: null,
    cryptoCurrencies: null
};