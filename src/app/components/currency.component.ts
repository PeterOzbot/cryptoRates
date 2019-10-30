import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ICurrency } from '../models/currency.interface';
import { GetCurrencies } from '../store/actions/currency.actions';
import { selectCurrencyList } from '../store/selectors/currency.selector';
import { IAppState } from '../store/state/app.state';


@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
    @Input()
    currencies: ICurrency[];
    @Output()
    currencySelected: EventEmitter<ICurrency> = new EventEmitter();

    constructor(private _store: Store<IAppState>, private _router: Router) { }

    ngOnInit() {
        this._store.dispatch(new GetCurrencies());
        this._store.pipe(select(selectCurrencyList)).subscribe(data => this.currencies = data.ToArray());
    }

    selectCurrency(currency: ICurrency) {
        this.currencySelected.emit(currency);
    }
}