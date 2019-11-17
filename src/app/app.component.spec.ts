import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { GetCurrencies } from './store/actions/currency.actions';
import { Store } from '@ngrx/store';
import { MockToolbarComponent, MockSidenavContainerComponent, MockRouterOutletComponent } from 'src/test-util/mocked-components';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore;
  const initialState = {
    currencies: {},
    cryptoCurrencies: {}
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockToolbarComponent,
        MockSidenavContainerComponent,
        MockRouterOutletComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.get(Store);
  }));

  it('should create the component', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should dispatch an the GetCurrencies action in ngOnInit lifecycle', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const action = new GetCurrencies();
    const spy = spyOn(mockStore, 'dispatch');

    // act
    fixture.detectChanges();

    // assert
    expect(spy).toHaveBeenCalledWith(action);
  });
});
