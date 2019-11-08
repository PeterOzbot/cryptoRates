
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyService } from './services/currency.service';
import { CurrencyEffects } from './store/effects/currency.effects';
import { appReducers } from './store/reducers/app.reducers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { SettingsComponent } from './components/settings/settings.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { AgGridModule } from 'ag-grid-angular';
import { CryptoCurrencyEffects } from './store/effects/crypto-currency.effects';
import { CryptoCurrencyService } from './services/crypto-currency.service';
import { CryptoCurrencyDetailsComponent } from './components/crypto-currency-details/crypto-currency-details.component';
import { MatInputModule } from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CryptoCurrencyComponent,
    CryptoCurrencyDetailsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CurrencyEffects, CryptoCurrencyEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    AgGridModule.withComponents([])
  ],
  providers: [CurrencyService, CryptoCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }