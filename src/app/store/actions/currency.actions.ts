import { Action } from '@ngrx/store';
import List from 'linqts/dist/src/list';
import { ICurrency } from '../../models/currency.interface';

export enum CurrencyActionsEnum {
    GetCurrencies = '[Currency] Get Currencies',
    GetCurrenciesSuccess = '[Currency] Get Currencies Success',
    GetCurrency = '[Currency] Get Currency',
    GetCurrencySuccess = '[Currency] Get Currency Success'
}

export class GetCurrencies implements Action {
    public readonly type = CurrencyActionsEnum.GetCurrencies;
}

export class GetCurrenciesSuccess implements Action {
    public readonly type = CurrencyActionsEnum.GetCurrenciesSuccess;
    constructor(public payload: List<ICurrency>) { }
}

export class GetCurrency implements Action {
    public readonly type = CurrencyActionsEnum.GetCurrency;
    constructor(public payload: string) { }
}

export class GetCurrencySuccess implements Action {
    public readonly type = CurrencyActionsEnum.GetCurrencySuccess;
    constructor(public payload: ICurrency) { }
}

export type CurrencyActions = GetCurrencies | GetCurrenciesSuccess | GetCurrency | GetCurrencySuccess;