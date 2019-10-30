import { CurrencyActions } from '../actions/currency.actions';
import { ICurrencyState, initialCurrencyState } from '../state/currecy.state';
import { CurrencyActionsEnum } from './../actions/currency.actions';

export const currencyReducers = (
    state = initialCurrencyState,
    action: CurrencyActions
): ICurrencyState => {
    switch (action.type) {
        case CurrencyActionsEnum.GetCurrenciesSuccess: {
            return {
                ...state,
                currencies: action.payload
            };
        }
        case CurrencyActionsEnum.GetCurrencySuccess: {
            return {
                ...state,
                selectedCurrency: action.payload
            };
        }

        default:
            return state;
    }
};