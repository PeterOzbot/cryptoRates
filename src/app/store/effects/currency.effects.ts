import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import { CurrencyActionsEnum, GetCurrencies, GetCurrenciesSuccess, SetCurrency, SetCurrencySuccess } from '../actions/currency.actions';
import { selectCurrencyList } from '../selectors/currency.selector';
import { IAppState } from '../state/app.state';
import { GetCryptoCurrency, GetCryptoCurrencyDetailsSuccess, GetCryptoCurrencyDetails } from '../actions/crypto-currency.actions';
import { selectSelectedCryptoCurrency } from '../selectors/crypto-currency.selector';

@Injectable()
export class CurrencyEffects {
    @Effect()
    getCurrencies$ = this._actions$.pipe(
        ofType<GetCurrencies>(CurrencyActionsEnum.GetCurrencies),
        withLatestFrom(this._store.pipe(select(selectCurrencyList))),
        switchMap(([payload, currencies]) => {
            if (!currencies) {
                const allCurrencies = this._currencyService.getCurrencies();
                const defaultCurrency = allCurrencies ? allCurrencies[0] : null;
                return [new GetCurrenciesSuccess(allCurrencies), new SetCurrency(defaultCurrency)];
            }
        })
    );

    @Effect()
    setCurrency$ = this._actions$.pipe(
        ofType<SetCurrency>(CurrencyActionsEnum.SetCurrency),
        withLatestFrom(this._store.pipe(select(selectSelectedCryptoCurrency))),
        switchMap(([selectedCurrency, cryptoCurrency]) => {
            if (!cryptoCurrency) {
                return [new SetCurrencySuccess(selectedCurrency.payload), new GetCryptoCurrency()];
            }
            else {
                return [new SetCurrencySuccess(selectedCurrency.payload), new GetCryptoCurrency(), new GetCryptoCurrencyDetails()];
            }
        })
    );

    constructor(
        private _currencyService: CurrencyService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}