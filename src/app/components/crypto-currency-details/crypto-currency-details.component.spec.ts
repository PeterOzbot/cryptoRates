import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyDetailsComponent } from './crypto-currency-details.component';
import { MatIconModule, MatInputModule } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GetCryptoCurrencyDetails } from 'src/app/store/actions/crypto-currency.actions';
import { By } from '@angular/platform-browser';
import { DecimalPipe } from '@angular/common';

describe('CryptoCurrencyDetailsComponent', () => {
  let component: CryptoCurrencyDetailsComponent;
  let fixture: ComponentFixture<CryptoCurrencyDetailsComponent>;
  let mockStore;
  const initialState = {
    currencies: {},
    cryptoCurrencies: {}
  };

  beforeEach((() => {
    TestBed.configureTestingModule(
      {
        imports: [
          MatIconModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [CryptoCurrencyDetailsComponent],
        providers: [provideMockStore({ initialState })]
      })
      .compileComponents();

    fixture = TestBed.createComponent(CryptoCurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockStore = TestBed.get(Store);
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an the GetCryptoCurrencyDetails action on refresh', () => {
    // arrange
    const action = new GetCryptoCurrencyDetails();
    const spy = spyOn(mockStore, 'dispatch');

    // act
    component.refresh();

    // assert
    expect(spy).toHaveBeenCalledWith(action);
  });

  const selectedCryptoCurrencyDetails = {
    name: "name",
    change1h: 1,
    change7d: 2,
    volume24h: 3,
    marketCap: 4,
    btcPrice: 5,
    totalSupply: 6,
    maxSupply: 7,
    rank: 8,
    symbol: "symbol",
    price: 9,
    change24h: 10
  };
  const selectedCryptoCurrencyDetailsFormated = {
    name: "name",
    change1h: '1',
    change7d: '2',
    volume24h: '3',
    marketCap: '4',
    btcPrice: '5.00',
    totalSupply: '6',
    maxSupply: '7',
    rank: '8',
    symbol: "symbol",
    price: '9',
    change24h: '10'
  };

  Object.keys(selectedCryptoCurrencyDetails).forEach((prop) => {
    it(`should display crypto currency details: ${prop}`, () => {
      // arrange
      fixture = TestBed.createComponent(CryptoCurrencyDetailsComponent);
      mockStore.setState({
        cryptoCurrencies: {
          selectedCryptoCurrencyDetails: selectedCryptoCurrencyDetails
        }
      });
      const htmlElement = fixture.debugElement.query(By.css(`#${prop}`));

      // act
      fixture.detectChanges();

      // assert
      expect(htmlElement.nativeElement.value).toBe(selectedCryptoCurrencyDetailsFormated[prop]);
    });
  });
});
