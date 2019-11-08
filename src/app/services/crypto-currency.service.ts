import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ICryptoCurrency } from '../models/crypto-currency.interface';
import { ICurrency } from '../models/currency.interface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class CryptoCurrencyService {

    constructor(private http: HttpClient) { }

    getCryptoCurrency(currency: ICurrency): Observable<ICryptoCurrency[]> {
        // if no currency return empty
        if (!currency) {
            return from([[]]);
        }

        return this.http.get<ICryptoCurrency[]>(environment.serverUrl + '/getCryptoCurrency/' + currency.code);
    }
}
//Invoke-WebRequest -Uri "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" -Headers @{'X-CMC_PRO_API_KEY'='0770e4c5-9653-44a4-87d9-c27dce85268f';"Accept"= "application/json"}