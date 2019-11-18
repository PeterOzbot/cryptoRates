import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatInputModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { NavigationService } from 'src/app/services/navigation.service';
import { MockNavigationService } from 'src/test-util/mocked-services';
import { GetCryptoCurrency } from 'src/app/store/actions/crypto-currency.actions';

describe('CryptoCurrencyComponent', () => {
  let component: CryptoCurrencyComponent;
  let fixture: ComponentFixture<CryptoCurrencyComponent>;
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
          NoopAnimationsModule,
          MatTableModule,
          MatPaginatorModule
        ],
        declarations: [CryptoCurrencyComponent],
        providers: [provideMockStore({ initialState }), { provide: NavigationService, useClass: MockNavigationService }]
      })
      .compileComponents();

    fixture = TestBed.createComponent(CryptoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockStore = TestBed.get(Store);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an the GetCryptoCurrency action on refresh', () => {
    // arrange
    const action = new GetCryptoCurrency();
    const spy = spyOn(mockStore, 'dispatch');

    // act
    component.refresh();

    // assert
    expect(spy).toHaveBeenCalledWith(action);
  });
});
