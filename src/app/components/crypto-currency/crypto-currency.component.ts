import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCryptoCurrencies } from 'src/app/store/selectors/crypto-currency.selector';
import { ICryptoCurrency } from 'src/app/models/crypto-currency.interface';
import { SetCryptoCurrency, GetCryptoCurrency } from 'src/app/store/actions/crypto-currency.actions';
import { NavigationService } from 'src/app/services/navigation.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.css']
})
export class CryptoCurrencyComponent implements OnInit {
  cryptoCurrenciesDataSource = new MatTableDataSource<ICryptoCurrency>([]);
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'change24h'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _store: Store<IAppState>, private navigationService: NavigationService) { }

  ngOnInit() {
    // subscribe to list of crypto currencies
    this._store.pipe(select(selectCryptoCurrencies)).subscribe(data => {
      if (data) {
        this.cryptoCurrenciesDataSource.data = data;
      }
    });

    // set paging to the table
    this.cryptoCurrenciesDataSource.paginator = this.paginator;
  }

  selectCryptoCurrency(selectedCryptoCurrency) {
    // dispatch selected crypto currency and navigate to details view
    if (selectedCryptoCurrency) {
      this._store.dispatch(new SetCryptoCurrency(selectedCryptoCurrency));
      this.navigationService.goToDetails();
    }
  }

  refresh() {
    // reload the list
    this._store.dispatch(new GetCryptoCurrency());
  }
}
