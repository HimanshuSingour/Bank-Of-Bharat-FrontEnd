import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetailsIsHere } from './AccountDetails';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private OPEN_BANK_ACCOUNT = "http://localhost:9090/finance/v1/bank/v4/bharat/create-account";

  constructor(private httpclient: HttpClient) { }

  createAccount(accountDetails: AccountDetailsIsHere){
    return this.httpclient.post(`${this.OPEN_BANK_ACCOUNT}` , accountDetails)
  }

}
