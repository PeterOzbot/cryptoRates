import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ICryptoCurrency } from '../models/crypto-currency.interface';
import { ICurrency } from '../models/currency.interface';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICryptoCurrencyDetails } from '../models/crypto-currency-details.interface';


@Injectable()
export class CryptoCurrencyService {
    constructor(private http: HttpClient) { }

    getCryptoCurrency(currency: ICurrency): Observable<ICryptoCurrency[]> {
        // if no currency return empty
        if (!currency) {
            return from([[]]);
        }

        return this.http.get<ICryptoCurrency[]>(`${environment.serverUrl}/${environment.getCryptoCurrency}/${currency.code}`);
    }

    getCryptoCurrencyDetails(currency: ICurrency, cryptoCurrency: ICryptoCurrency): Observable<ICryptoCurrencyDetails> {
        // if no currency return nothing
        if (!currency || !cryptoCurrency) {
            return from([]);
        }

        return this.http.get<ICryptoCurrencyDetails>(`${environment.serverUrl}/${environment.getCryptoCurrencyDetails}/${currency.code}/${cryptoCurrency.symbol}`);
    }

    getBtcPrice(cryptoCurrency: ICryptoCurrency): Observable<ICryptoCurrencyDetails> {
        // if no currency return nothing
        if (!cryptoCurrency) {
            return from([]);
        }

        return this.http.get<ICryptoCurrencyDetails>(`${environment.serverUrl}/${environment.getCryptoCurrencyBtcPrice}/${cryptoCurrency.symbol}`);
    }
}