import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICryptoCurrencyState } from '../state/crypto-currency.state';


const selectCryptoCurrency = (state: IAppState) => state.cryptoCurrencies;

export const selectCryptoCurrencies = createSelector(
    selectCryptoCurrency,
    (state: ICryptoCurrencyState) => state.cryptoCurrencies
);

export const selectSelectedCryptoCurrency = createSelector(
    selectCryptoCurrency,
    (state: ICryptoCurrencyState) => state.selectedCryptoCurrency
);