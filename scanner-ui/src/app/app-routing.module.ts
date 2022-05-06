import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ChooseActionComponent } from './components/choose-action/choose-action.component';
import { HomeComponent } from './components/home/home.component';
import { ScanUserComponent } from './components/scan-user/scan-user.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan-user', component: ScanUserComponent },
  { path: 'choose', component: ChooseActionComponent },
  { path: 'checkin', component: CheckoutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
