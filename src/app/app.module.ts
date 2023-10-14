import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountCreateComponent } from './account-create/account-create.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreditMoneyComponent } from './credit-money/credit-money.component';
import { DebitMoneyComponent } from './debit-money/debit-money.component';
import { BalanceEnquiryComponent } from './balance-enquiry/balance-enquiry.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { GetUpiDetailsComponent } from './get-upi-details/get-upi-details.component';
import { GetNetBankingDetailsComponent } from './get-net-banking-details/get-net-banking-details.component';
import { CreateNetBankingIdComponent } from './create-net-banking-id/create-net-banking-id.component';
import { CreateUpiIdComponent } from './create-upi-id/create-upi-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreateComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    UpdateDetailsComponent,
    AccountDetailsComponent,
    CreditMoneyComponent,
    DebitMoneyComponent,
    BalanceEnquiryComponent,
    TransactionDetailsComponent,
    DeleteAccountComponent,
    GetUpiDetailsComponent,
    GetNetBankingDetailsComponent,
    CreateNetBankingIdComponent,
    CreateUpiIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
