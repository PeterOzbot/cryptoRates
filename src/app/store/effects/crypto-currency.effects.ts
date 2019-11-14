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
        withLatestFrom(this._store.pipe(select(selectSelectedCurrency))),
        switchMap(([payload, selectedCurrency]) => {
            return this._cryptoCurrencyService.getCryptoCurrency(selectedCurrency)
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
            return [new SetCryptoCurrencySuccess(cryptoCurrency), new ClearCryptoCurrencyDetails(), new GetCryptoCurrencyDetails()];
        })
    );

    @Effect()
    getCryptoCurrencyDetails$ = this._actions$.pipe(
        ofType<GetCryptoCurrencyDetails>(CryptoCurrencyActionsEnum.GetCryptoCurrencyDetails),
        withLatestFrom(this._store.pipe(select(selectSelectedCryptoCurrency)), this._store.pipe(select(selectSelectedCurrency))),
        switchMap(([payload, selectedCryptoCurrency, selectedCurrency]) => {
            if (selectedCryptoCurrency) {

                // make call to get details AND to get btc price
                let getDetails = this._cryptoCurrencyService.getCryptoCurrencyDetails(selectedCurrency, selectedCryptoCurrency);
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
            else {
                of(new GetCryptoCurrencyDetailsFailure("Cant load details. SelectedCryptoCurrency is not defined."));
            }
        })
    );

    constructor(
        private _cryptoCurrencyService: CryptoCurrencyService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}