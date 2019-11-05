
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
import { RatesComponent } from './components/rates/rates.component';
import { AgGridModule } from 'ag-grid-angular';
import { RateEffects } from './store/effects/rate.effects';
import { RateService } from './services/rate.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    RatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CurrencyEffects, RateEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    AgGridModule.withComponents([])
  ],
  providers: [CurrencyService, RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }