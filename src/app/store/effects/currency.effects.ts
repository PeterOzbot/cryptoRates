import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import { CurrencyActionsEnum, GetCurrencies, GetCurrenciesSuccess, SetCurrency, SetCurrencySuccess } from '../actions/currency.actions';
import { selectCurrencyList } from '../selectors/currency.selector';
import { IAppState } from '../state/app.state';

@Injectable()
export class CurrencyEffects {
    @Effect()
    getCurrencies$ = this._actions$.pipe(
        ofType<GetCurrencies>(CurrencyActionsEnum.GetCurrencies),
        switchMap(() => {
            const allCurrencies = this._currencyService.getCurrencies();
            return of(new GetCurrenciesSuccess(allCurrencies));
        })
    );

    @Effect()
    setCurrency$ = this._actions$.pipe(
        ofType<SetCurrency>(CurrencyActionsEnum.SetCurrency),
        map(action => action.payload),
        switchMap((selectedCurrency) => {
            return of(new SetCurrencySuccess(selectedCurrency));
        })
    );

    constructor(
        private _currencyService: CurrencyService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}