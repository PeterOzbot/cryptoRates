import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { ICryptoCurrencyDetails } from 'src/app/models/crypto-currency-details.interface';

export interface ICryptoCurrencyState {
    cryptoCurrencies: ICryptoCurrency[];
    selectedCryptoCurrency: ICryptoCurrency;
    selectedCryptoCurrencyDetails: ICryptoCurrencyDetails;
}

export const initialCryptoCurrencyState: ICryptoCurrencyState = {
    selectedCryptoCurrency: null,
    cryptoCurrencies: null,
    selectedCryptoCurrencyDetails: null
};