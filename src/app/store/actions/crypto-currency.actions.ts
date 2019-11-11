import { Action } from '@ngrx/store';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { ICurrency } from 'src/app/models/currency.interface';
import { CurrencyActionsEnum } from './currency.actions';
import { ICryptoCurrencyDetails } from 'src/app/models/crypto-currency-details.interface';

export enum CryptoCurrencyActionsEnum {
    GetCryptoCurrency = '[CryptoCurrency] Get CryptoCurrency',
    GetCryptoCurrencySuccess = '[CryptoCurrency] Get CryptoCurrency Success',
    GetCryptoCurrencyFailure = '[CryptoCurrency] Get CryptoCurrency Failure',
    SetCryptoCurrency = '[CryptoCurrency] Set CryptoCurrency',
    SetCryptoCurrencySuccess = '[CryptoCurrency] Set CryptoCurrency Success',
    ClearCryptoCurrencyDetails = '[CryptoCurrencyDetails] Clear CryptoCurrencyDetails',
    GetCryptoCurrencyDetails = '[CryptoCurrencyDetails] Get CryptoCurrencyDetails',
    GetCryptoCurrencyDetailsSuccess = '[CryptoCurrencyDetails] Get CryptoCurrencyDetails Success',
    GetCryptoCurrencyDetailsFailure = '[CryptoCurrencyDetails] Get CryptoCurrencyDetails Failure',
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

export class ClearCryptoCurrencyDetails implements Action {
    public readonly type = CryptoCurrencyActionsEnum.ClearCryptoCurrencyDetails;
    constructor() { }
}

export class GetCryptoCurrencyDetails implements Action {
    public readonly type = CryptoCurrencyActionsEnum.GetCryptoCurrencyDetails;
    constructor(public payload: ICryptoCurrency) { }
}

export class GetCryptoCurrencyDetailsSuccess implements Action {
    public readonly type = CryptoCurrencyActionsEnum.GetCryptoCurrencyDetailsSuccess;
    constructor(public payload: ICryptoCurrencyDetails) { }
}

export class GetCryptoCurrencyDetailsFailure implements Action {
    public readonly type = CryptoCurrencyActionsEnum.GetCryptoCurrencyDetailsFailure;
    constructor(public error: any) { }
}


export type CryptoCurrencyActions = GetCryptoCurrency | GetCryptoCurrencySuccess | GetCryptoCurrencyFailure | SetCryptoCurrency | SetCryptoCurrencySuccess | GetCryptoCurrencyDetails | GetCryptoCurrencyDetailsSuccess | GetCryptoCurrencyDetailsFailure | ClearCryptoCurrencyDetails;