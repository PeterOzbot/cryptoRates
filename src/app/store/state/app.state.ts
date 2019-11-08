import { RouterReducerState } from '@ngrx/router-store';
import { ICurrencyState, initialCurrencyState } from './currecy.state';
import { ICryptoCurrencyState, initialCryptoCurrencyState } from './crypto-currency.state';


export interface IAppState {
    router?: RouterReducerState;
    currencies: ICurrencyState;
    cryptoCurrencies: ICryptoCurrencyState;
}

export function getInitialState(): IAppState {
    return {
        currencies: initialCurrencyState,
        cryptoCurrencies: initialCryptoCurrencyState
    };
}