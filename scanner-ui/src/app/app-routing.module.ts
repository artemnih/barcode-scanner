import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinSummaryComponent } from './components/checkin-summary/checkin-summary.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutSummaryComponent } from './components/checkout-summary/checkout-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ChooseActionComponent } from './components/choose-action/choose-action.component';
import { HomeComponent } from './components/home/home.component';
import { ScanUserComponent } from './components/scan-user/scan-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan-user', component: ScanUserComponent },
  { path: 'choose', component: ChooseActionComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'checkin-summary', component: CheckinSummaryComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout-summary', component: CheckoutSummaryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
