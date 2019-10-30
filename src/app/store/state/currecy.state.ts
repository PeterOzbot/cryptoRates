
import { List } from 'linqts';
import { ICurrency } from '../../models/currency.interface';

export interface ICurrencyState {
    currencies: List<ICurrency>;
    selectedCurrency: ICurrency;
}

export const initialCurrencyState: ICurrencyState = {
    selectedCurrency: null,
    currencies: null
};