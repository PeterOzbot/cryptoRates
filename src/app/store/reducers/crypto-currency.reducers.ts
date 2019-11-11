import { initialCryptoCurrencyState, ICryptoCurrencyState } from '../state/crypto-currency.state';
import { CryptoCurrencyActions, CryptoCurrencyActionsEnum } from '../actions/crypto-currency.actions';
import { Statement } from '@angular/compiler';

export const rateReducers = (
    state = initialCryptoCurrencyState,
    action: CryptoCurrencyActions
): ICryptoCurrencyState => {
    switch (action.type) {
        case CryptoCurrencyActionsEnum.GetCryptoCurrencySuccess: {
            return {
                ...state,
                cryptoCurrencies: action.payload
            };
        }
        case CryptoCurrencyActionsEnum.SetCryptoCurrencySuccess: {
            return {
                ...state,
                selectedCryptoCurrency: action.payload
            };
        }
        case CryptoCurrencyActionsEnum.ClearCryptoCurrencyDetails: {
            return {
                ...state,
                selectedCryptoCurrencyDetails: null
            };
        }
        case CryptoCurrencyActionsEnum.GetCryptoCurrencyDetailsSuccess: {
            return {
                ...state,
                selectedCryptoCurrencyDetails: action.payload
            };
        }

        default:
            return state;
    }
};