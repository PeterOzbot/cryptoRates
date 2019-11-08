import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyDetailsComponent } from './crypto-currency-details.component';

describe('CryptoCurrencyDetailsComponent', () => {
  let component: CryptoCurrencyDetailsComponent;
  let fixture: ComponentFixture<CryptoCurrencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
