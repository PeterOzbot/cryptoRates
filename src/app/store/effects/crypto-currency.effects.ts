import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, forkJoin } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { GetCryptoCurrency, CryptoCurrencyActionsEnum, GetCryptoCurrencySuccess, GetCryptoCurrencyFailure, SetCryptoCurrency, SetCryptoCurrencySuccess, GetCryptoCurrencyDetails, GetCryptoCurrencyDetailsFailure, GetCryptoCurrencyDetailsSuccess, ClearCryptoCurrencyDetails } from '../actions/crypto-currency.actions';
import { CryptoCurrencyService } from 'src/app/services/crypto-currency.service';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { selectSelectedCurrency } from '../selectors/currency.selector';
import { selectSelectedCryptoCurrency, selectCryptoCurrencies } from '../selectors/crypto-currency.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICryptoCurrencyDetails } from 'src/app/models/crypto-currency-details.interface';

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
    setCryptoCurrency$ = this._actions$.pipe(
        ofType<SetCryptoCurrency>(CryptoCurrencyActionsEnum.SetCryptoCurrency),
        map(action => action.payload),
        switchMap((cryptoCurrency) => {
            if (cryptoCurrency) {
                return [new SetCryptoCurrencySuccess(cryptoCurrency), new ClearCryptoCurrencyDetails(), new GetCryptoCurrencyDetails(cryptoCurrency)];
            }
        })
    );

    @Effect()
    getCryptoCurrencyDetails$ = this._actions$.pipe(
        ofType<GetCryptoCurrencyDetails>(CryptoCurrencyActionsEnum.GetCryptoCurrencyDetails),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectSelectedCryptoCurrency)), this._store.pipe(select(selectSelectedCurrency))),
        switchMap(([payload, selectedCryptoCurrency, selectedSurrency]) => {
            // make call to get details AND to get btc price
            if (selectedCryptoCurrency) {

                let getDetails = this._cryptoCurrencyService.getCryptoCurrencyDetails(selectedSurrency, selectedCryptoCurrency);
                let getBtcPrice = this._cryptoCurrencyService.getBtcPrice(selectedCryptoCurrency);

                return forkJoin([getDetails, getBtcPrice]).pipe(
                    map(([cryptoCurrencyDetails, btcPrice]) => {

                        // update the first result
                        cryptoCurrencyDetails.btcPrice = btcPrice.btcPrice;

                        // return
                        return new GetCryptoCurrencyDetailsSuccess(cryptoCurrencyDetails);
                    }),
                    catchError(err => of(new GetCryptoCurrencyDetailsFailure(err)))
                )
            }
        })
    );

    constructor(
        private _cryptoCurrencyService: CryptoCurrencyService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}