import { Action } from '@ngrx/store';
import { ICurrency } from '../../models/currency.interface';

export enum CurrencyActionsEnum {
    GetCurrencies = '[Currency] Get Currencies',
    GetCurrenciesSuccess = '[Currency] Get Currencies Success',
    SetCurrency = '[Currency] Set Currency',
    SetCurrencySuccess = '[Currency] Set Currency Success'
}

export class GetCurrencies implements Action {
    public readonly type = CurrencyActionsEnum.GetCurrencies;
}

export class GetCurrenciesSuccess implements Action {
    public readonly type = CurrencyActionsEnum.GetCurrenciesSuccess;
    constructor(public payload: ICurrency[]) { }
}

export class SetCurrency implements Action {
    public readonly type = CurrencyActionsEnum.SetCurrency;
    constructor(public payload: ICurrency) { }
}

export class SetCurrencySuccess implements Action {
    public readonly type = CurrencyActionsEnum.SetCurrencySuccess;
    constructor(public payload: ICurrency) { }
}

export type CurrencyActions = GetCurrencies | GetCurrenciesSuccess | SetCurrency | SetCurrencySuccess;