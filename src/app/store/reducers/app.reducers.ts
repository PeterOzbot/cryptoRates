import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { currencyReducers } from './currency.reducers';


export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    currencies: currencyReducers
};