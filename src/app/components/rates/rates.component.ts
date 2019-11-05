import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectRatesList } from 'src/app/store/selectors/rate.selector';
import { IRate } from 'src/app/models/rate.interface';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  rates: IRate[] = [];
  columnDefs = [
    { headerName: 'Rank', field: 'rank' },
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Change', field: 'change' }
  ];

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.pipe(select(selectRatesList)).subscribe(data => this.rates = data);
  }

}
