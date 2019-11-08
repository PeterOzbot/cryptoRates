import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { CryptoCurrencyDetailsComponent } from './components/crypto-currency-details/crypto-currency-details.component';
import { RouteNames } from './app-routing';

const routes: Routes = [
  {
    path: RouteNames.Root,
    component: CryptoCurrencyComponent
  },
  {
    path: RouteNames.Settings,
    component: SettingsComponent
  },
  {
    path: RouteNames.Details,
    component: CryptoCurrencyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };