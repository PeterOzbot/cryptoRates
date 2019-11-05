import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { GetRates, RateActionsEnum, GetRatesSuccess } from '../actions/rate.actions';
import { selectRatesList } from '../selectors/rate.selector';
import { RateService } from 'src/app/services/rate.service';
import { selectSelectedCurrency } from '../selectors/currency.selector';

@Injectable()
export class RateEffects {
    @Effect()
    getRates$ = this._actions$.pipe(
        ofType<GetRates>(RateActionsEnum.GetRates),
        switchMap(({ payload, type }) => {
            const allRates = this._rateService.getRates(payload);
            return of(new GetRatesSuccess(allRates));
        })
    );

    constructor(
        private _rateService: RateService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}