import { Action } from '@ngrx/store';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { ICurrency } from 'src/app/models/currency.interface';
import { CurrencyActionsEnum } from './currency.actions';

export enum CryptoCurrencyActionsEnum {
    GetCryptoCurrency = '[CryptoCurrency] Get CryptoCurrency',
    GetCryptoCurrencySuccess = '[CryptoCurrency] Get CryptoCurrency Success',
    GetCryptoCurrencyFailure = '[CryptoCurrency] Get CryptoCurrency Failure',
    SetCryptoCurrency = '[CryptoCurrency] Set CryptoCurrency',
    SetCryptoCurrencySuccess = '[CryptoCurrency] Set CryptoCurrency Success'
}

export class GetCryptoCurrency implements Action {
    public readonly type = CryptoCurrencyActionsEnum.GetCryptoCurrency;
    constructor(public payload: ICurrency) { }
}

export class GetCryptoCurrencySuccess implements Action {
    public readonly type = CryptoCurrencyActionsEnum.GetCryptoCurrencySuccess;
    constructor(public payload: ICryptoCurrency[]) { }
}

export class GetCryptoCurrencyFailure implements Action {
    public readonly type = CryptoCurrencyActionsEnum.GetCryptoCurrencyFailure;
    constructor(public error: any) { }
}

export class SetCryptoCurrency implements Action {
    public readonly type = CryptoCurrencyActionsEnum.SetCryptoCurrency;
    constructor(public payload: ICryptoCurrency) { }
}

export class SetCryptoCurrencySuccess implements Action {
    public readonly type = CryptoCurrencyActionsEnum.SetCryptoCurrencySuccess;
    constructor(public payload: ICryptoCurrency) { }
}


export type CryptoCurrencyActions = GetCryptoCurrency | GetCryptoCurrencySuccess | GetCryptoCurrencyFailure | SetCryptoCurrency | SetCryptoCurrencySuccess;