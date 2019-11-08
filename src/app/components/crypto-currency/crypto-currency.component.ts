import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCryptoCurrencies } from 'src/app/store/selectors/crypto-currency.selector';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { SetCryptoCurrency } from 'src/app/store/actions/crypto-currency.actions';
import { Router } from '@angular/router';
import { RouteNames } from 'src/app/app-routing';

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
    { headerName: 'Change', field: 'change' }
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
