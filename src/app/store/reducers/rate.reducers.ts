import { initialRateState, IRateState } from '../state/rate.state';
import { RateActions, RateActionsEnum } from '../actions/rate.actions';

export const rateReducers = (
    state = initialRateState,
    action: RateActions
): IRateState => {
    switch (action.type) {
        case RateActionsEnum.GetRatesSuccess: {
            return {
                ...state,
                rates: action.payload
            };
        }

        default:
            return state;
    }
};