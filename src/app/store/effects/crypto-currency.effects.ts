import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { GetCryptoCurrency, CryptoCurrencyActionsEnum, GetCryptoCurrencySuccess, GetCryptoCurrencyFailure, SetCryptoCurrency, SetCryptoCurrencySuccess } from '../actions/crypto-currency.actions';
import { CryptoCurrencyService } from 'src/app/services/crypto-currency.service';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { selectSelectedCurrency } from '../selectors/currency.selector';

@Injectable()
export class CryptoCurrencyEffects {
    @Effect()
    getCryptoCurrency$ = this._actions$.pipe(
        ofType<GetCryptoCurrency>(CryptoCurrencyActionsEnum.GetCryptoCurrency),
        switchMap(({ payload }) => {

            return this._cryptoCurrencyService.getCryptoCurrency(payload)
                .pipe(
                    map((cryptoCurrencies: ICryptoCurrency[]) => {
                        return new GetCryptoCurrencySuccess(cryptoCurrencies);
                    }),
                    catchError(err => of(new GetCryptoCurrencyFailure(err)))
                )
        })
    );

    @Effect()
    setCurrency$ = this._actions$.pipe(
        ofType<SetCryptoCurrency>(CryptoCurrencyActionsEnum.SetCryptoCurrency),
        map(action => action.payload),
        switchMap((cryptoCurrency) => {
            if (cryptoCurrency) {
                return of(new SetCryptoCurrencySuccess(cryptoCurrency));
            }
        })
    );

    constructor(
        private _cryptoCurrencyService: CryptoCurrencyService,
        private _actions$: Actions) { }
}