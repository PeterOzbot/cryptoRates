import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCryptoCurrencies } from 'src/app/store/selectors/crypto-currency.selector';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { SetCryptoCurrency, GetCryptoCurrency } from 'src/app/store/actions/crypto-currency.actions';
import { Router } from '@angular/router';
import { RouteNames } from 'src/app/app-routing';
import { GetCurrencies } from 'src/app/store/actions/currency.actions';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.css']
})
export class CryptoCurrencyComponent implements OnInit {
  cryptoCurrencies: ICryptoCurrency[] = [];
  columnDefs = [
    { headerName: 'Rank', field: 'rank' },
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Price', field: 'price' },
    { headerName: '24h Change', field: 'change24h' }
  ];
  gridApi;
  gridColumnApi;
  rowSelection = "single";

  constructor(private _store: Store<IAppState>, private router: Router) { }

  ngOnInit() {
    this._store.pipe(select(selectCryptoCurrencies)).subscribe(data => this.cryptoCurrencies = data);
  }

  selectCryptoCurrency(event) {
    var selectedCryptoCurrency = this.gridApi.getSelectedRows();
    if (selectedCryptoCurrency && selectedCryptoCurrency.length > 0) {
      this._store.dispatch(new SetCryptoCurrency(selectedCryptoCurrency[0]));
      this.router.navigateByUrl(RouteNames.Details);
    }
  }

  refresh() {
    this._store.dispatch(new GetCryptoCurrency());
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
