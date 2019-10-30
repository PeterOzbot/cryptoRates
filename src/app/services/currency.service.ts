import { Injectable } from '@angular/core';
import { List } from 'linqts';
import { environment } from '../../environments/environment';
import { ICurrency } from '../models/currency.interface';


@Injectable()
export class CurrencyService {

    getCurrencies(): List<ICurrency> {
        return environment.availableCurrencies;
    }
}