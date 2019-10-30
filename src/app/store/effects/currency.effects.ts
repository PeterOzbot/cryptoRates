import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import { CurrencyActionsEnum, GetCurrencies, GetCurrenciesSuccess, GetCurrency, GetCurrencySuccess } from '../actions/currency.actions';
import { selectCurrencyList } from '../selectors/currency.selector';
import { IAppState } from '../state/app.state';

@Injectable()
export class CurrencyEffects {
    @Effect()
    getCurrency$ = this._actions$.pipe(
        ofType<GetCurrency>(CurrencyActionsEnum.GetCurrency),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectCurrencyList))),
        switchMap(([code, currencies]) => {
            //const selectedCurrency = currencies.FirstOrDefault(currency => currency.code === code);
            const selectedCurrency = null;
            return of(new GetCurrencySuccess(selectedCurrency));
        })
    );

    @Effect()
    getCurrencies$ = this._actions$.pipe(
        ofType<GetCurrencies>(CurrencyActionsEnum.GetCurrencies),
        switchMap(() => {
            const allCurrencies = this._currencyService.getCurrencies();
            return of(new GetCurrenciesSuccess(allCurrencies));
        })
    );

    constructor(
        private _currencyService: CurrencyService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}