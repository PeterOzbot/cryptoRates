import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IRateState } from '../state/rate.state';


const selectRates = (state: IAppState) => state.rates;

export const selectRatesList = createSelector(
    selectRates,
    (state: IRateState) => state.rates
);

export const selectSelectedRate = createSelector(
    selectRates,
    (state: IRateState) => state.selectedRate
);