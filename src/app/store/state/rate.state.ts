import { IRate } from 'src/app/models/rate.interface';

export interface IRateState {
    rates: IRate[];
    selectedRate: IRate;
}

export const initialRateState: IRateState = {
    selectedRate: null,
    rates: null
};