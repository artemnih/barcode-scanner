import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { ChooseActionComponent } from './components/choose-action/choose-action.component';
import { ScanUserComponent } from './components/scan-user/scan-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    HomeComponent,
    ThankyouComponent,
    ChooseActionComponent,
    ScanUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
