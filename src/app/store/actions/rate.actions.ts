import { Action } from '@ngrx/store';
import { IRate } from 'src/app/models/rate.interface';
import { ICurrency } from 'src/app/models/currency.interface';

export enum RateActionsEnum {
    GetRates = '[Rate] Get Rates',
    GetRatesSuccess = '[Rate] Get Rates Success',
    GetRatesFailure = '[Rate] Get Rates Failure'
}

export class GetRates implements Action {
    public readonly type = RateActionsEnum.GetRates;
    constructor(public payload: ICurrency) { }
}

export class GetRatesSuccess implements Action {
    public readonly type = RateActionsEnum.GetRatesSuccess;
    constructor(public payload: IRate[]) { }
}

export class GetRatesFailure implements Action {
    public readonly type = RateActionsEnum.GetRatesFailure;
    constructor(public error: any) { }
}


export type RateActions = GetRates | GetRatesSuccess | GetRatesFailure;