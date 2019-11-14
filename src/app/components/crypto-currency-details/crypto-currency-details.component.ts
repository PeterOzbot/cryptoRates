import { Component, OnInit } from '@angular/core';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectSelectedCryptoCurrency, selectSelectedCryptoCurrencyDetails } from 'src/app/store/selectors/crypto-currency.selector';
import { ICurrencyState } from 'src/app/store/state/currecy.state';
import { ICryptoCurrencyDetails } from 'src/app/models/crypto-currency-details.interface';
import { GetCurrencies } from 'src/app/store/actions/currency.actions';
import { GetCryptoCurrencyDetails } from 'src/app/store/actions/crypto-currency.actions';

@Component({
  selector: 'app-crypto-currency-details',
  templateUrl: './crypto-currency-details.component.html',
  styleUrls: ['./crypto-currency-details.component.css']
})
export class CryptoCurrencyDetailsComponent implements OnInit {
  cryptoCurrencyDetails: ICryptoCurrencyDetails;

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.pipe(select(selectSelectedCryptoCurrencyDetails)).subscribe(data => this.cryptoCurrencyDetails = data);
  }

  refresh() {
    if (this.cryptoCurrencyDetails) {
      this._store.dispatch(new GetCryptoCurrencyDetails());
    }
  }
}