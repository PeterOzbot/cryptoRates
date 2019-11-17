import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MockMatButtonToggleGroupComponent, MockMatButtonToggleComponent } from 'src/test-util/mocked-components';
import { provideMockStore } from '@ngrx/store/testing';
import { SetCurrency } from 'src/app/store/actions/currency.actions';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let mockStore;
  const initialState = {
    currencies: {},
    cryptoCurrencies: {}
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatButtonToggleModule
      ],
      declarations: [
        SettingsComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.get(Store);
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an the SetCurrency action in selectCurrency', () => {
    // arrange
    const currency = { code: 'XXX' };
    const action = new SetCurrency(currency);
    const spy = spyOn(mockStore, 'dispatch');

    // act
    component.selectCurrency(currency);

    // assert
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should display currencies', () => {
    // arrange
    fixture = TestBed.createComponent(SettingsComponent);
    mockStore.setState({
      currencies: { currencies: [{ code: '1' }, { code: '2' }, { code: '3' }] }
    });

    // act
    fixture.detectChanges();
    const getCurrenciesButtons = fixture.debugElement.queryAll(By.css('.mat-button-toggle-button'));

    // assert
    expect(getCurrenciesButtons.length).toBe(3);
  });
});
