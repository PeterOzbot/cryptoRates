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
    this._store.dispatch(new GetCurrencies());
    this._store.pipe(select(selectCurrencyList)).subscribe(data => this.currencies = data);
    this._store.pipe(select(selectSelectedCurrency)).subscribe(data => this.selectedCurrency = data);
  }

  selectCurrency(currency: ICurrency) {
    this._store.dispatch(new SetCurrency(currency));
  }

}
