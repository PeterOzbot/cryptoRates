
import { ICurrency } from '../../models/currency.interface';

export interface ICurrencyState {
    currencies: ICurrency[];
    selectedCurrency: ICurrency;
}

export const initialCurrencyState: ICurrencyState = {
    selectedCurrency: null,
    currencies: null
};