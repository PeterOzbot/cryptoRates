import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCryptoCurrencies } from 'src/app/store/selectors/crypto-currency.selector';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { SetCryptoCurrency, GetCryptoCurrency } from 'src/app/store/actions/crypto-currency.actions';
import { NavigationService } from 'src/app/services/navigation.service';

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

  constructor(private _store: Store<IAppState>, private navigationService: NavigationService) { }

  ngOnInit() {
    // subscribe to list of crypto currencies
    this._store.pipe(select(selectCryptoCurrencies)).subscribe(data => this.cryptoCurrencies = data);
  }

  selectCryptoCurrency(event) {
    // get the selected one
    var selectedCryptoCurrency = this.gridApi.getSelectedRows();

    // dispatch selected crypto currency and navigate to details view
    if (selectedCryptoCurrency && selectedCryptoCurrency.length > 0) {
      this._store.dispatch(new SetCryptoCurrency(selectedCryptoCurrency[0]));
      this.navigationService.goToDetails();
    }
  }

  refresh() {
    // reload the list
    this._store.dispatch(new GetCryptoCurrency());
  }

  onGridReady(params) {
    // setting up ag-grid
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
