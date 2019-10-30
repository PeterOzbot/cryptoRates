import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICurrencyState } from '../state/currecy.state';


const selectCurrencies = (state: IAppState) => state.currencies;

export const selectCurrencyList = createSelector(
    selectCurrencies,
    (state: ICurrencyState) => state.currencies
);

export const selectSelectedCurrency = createSelector(
    selectCurrencies,
    (state: ICurrencyState) => state.selectedCurrency
);