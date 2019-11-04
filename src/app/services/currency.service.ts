import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ICurrency } from '../models/currency.interface';


@Injectable()
export class CurrencyService {

    getCurrencies(): ICurrency[] {
        return environment.availableCurrencies;
    }
}