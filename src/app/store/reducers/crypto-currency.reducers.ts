import { initialCryptoCurrencyState, ICryptoCurrencyState } from '../state/crypto-currency.state';
import { CryptoCurrencyActions, CryptoCurrencyActionsEnum } from '../actions/crypto-currency.actions';

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

        default:
            return state;
    }
};