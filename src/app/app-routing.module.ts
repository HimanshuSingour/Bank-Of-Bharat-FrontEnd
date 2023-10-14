import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { CreditMoneyComponent } from './credit-money/credit-money.component';
import { BalanceEnquiryComponent } from './balance-enquiry/balance-enquiry.component';
import { CreateNetBankingIdComponent } from './create-net-banking-id/create-net-banking-id.component';
import { CreateUpiIdComponent } from './create-upi-id/create-upi-id.component';
import { DebitMoneyComponent } from './debit-money/debit-money.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { GetNetBankingDetailsComponent } from './get-net-banking-details/get-net-banking-details.component';
import { GetUpiDetailsComponent } from './get-upi-details/get-upi-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [

  {
    path : 'home',
    component: HomeComponent
  },

  {
    path : 'account-create',
    component: AccountCreateComponent
  },

  {
    path : 'get-account-details',
    component: AccountDetailsComponent
  },

  {
    path : 'balance-enquiry',
    component: BalanceEnquiryComponent
  },

  {
    path : 'create-net-banking',
    component: CreateNetBankingIdComponent
  },

  {
    path : 'create-upi-id',
    component: CreateUpiIdComponent
  },

  {
    path : 'credit-money',
    component: CreditMoneyComponent
  },

  {
    path : 'debit-money',
    component: DebitMoneyComponent
  },

  {
    path : 'delet',
    component: DeleteAccountComponent
  },

  {
    path : 'get-netbanking-details',
    component: GetNetBankingDetailsComponent
  },

  {
    path : 'get-upi-details',
    component: GetUpiDetailsComponent
  },

  {
    path : 'transaction-details',
    component: TransactionDetailsComponent
  },

  {
    path : 'update-details',
    component: UpdateDetailsComponent
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
