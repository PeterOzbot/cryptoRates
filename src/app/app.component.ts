import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetCurrencies } from './store/actions/currency.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Crypto Rates';

  constructor(private _store: Store<IAppState>) { }


  ngOnInit() {
    this._store.dispatch(new GetCurrencies());
  }
}
