import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IRate } from '../models/rate.interface';
import { ICurrency } from '../models/currency.interface';


@Injectable()
export class RateService {

    getRates(currency: ICurrency): IRate[] {
        return [
            {
                change: 10,
                price: 100,
                rank: 5,
                symbol: 'XXX'
            }
        ];
    }
}