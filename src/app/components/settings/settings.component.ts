import { Component, OnInit, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ICurrency } from 'src/app/models/currency.interface';
import { GetCurrencies, SetCurrency } from 'src/app/store/actions/currency.actions';
import { selectCurrencyList, selectSelectedCurrency } from 'src/app/store/selectors/currency.selector';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currencies: ICurrency[] = [];
  selectedCurrency: ICurrency;

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    // subscribe to list fo all available currencies and to currently selected one
    this._store.pipe(select(selectCurrencyList)).subscribe(data => this.currencies = data);
    this._store.pipe(select(selectSelectedCurrency)).subscribe(data => this.selectedCurrency = data);
  }

  selectCurrency(currency: ICurrency) {
    // dispatch new selected currency
    this._store.dispatch(new SetCurrency(currency));
  }

}
