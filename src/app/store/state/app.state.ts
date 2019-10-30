import { RouterReducerState } from '@ngrx/router-store';
import { ICurrencyState, initialCurrencyState } from './currecy.state';


export interface IAppState {
    router?: RouterReducerState;
    currencies: ICurrencyState;
}

export function getInitialState(): IAppState {
    return {
        currencies: initialCurrencyState
    };
}