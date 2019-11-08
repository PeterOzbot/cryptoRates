import { Component, OnInit } from '@angular/core';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectSelectedCryptoCurrency } from 'src/app/store/selectors/crypto-currency.selector';
import { ICurrencyState } from 'src/app/store/state/currecy.state';

@Component({
  selector: 'app-crypto-currency-details',
  templateUrl: './crypto-currency-details.component.html',
  styleUrls: ['./crypto-currency-details.component.css']
})
export class CryptoCurrencyDetailsComponent implements OnInit {
  cryptoCurrency: ICryptoCurrency;

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.pipe(select(selectSelectedCryptoCurrency)).subscribe(data => this.cryptoCurrency = data);
  }
}