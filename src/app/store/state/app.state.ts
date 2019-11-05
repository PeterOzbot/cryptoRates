import { RouterReducerState } from '@ngrx/router-store';
import { ICurrencyState, initialCurrencyState } from './currecy.state';
import { IRateState, initialRateState } from './rate.state';


export interface IAppState {
    router?: RouterReducerState;
    currencies: ICurrencyState;
    rates: IRateState;
}

export function getInitialState(): IAppState {
    return {
        currencies: initialCurrencyState,
        rates: initialRateState
    };
}