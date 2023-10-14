import { Component, OnInit } from '@angular/core';
import { AccountDetailsIsHere } from '../AccountDetails';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})


export class AccountCreateComponent implements OnInit{

  accountDetails: AccountDetailsIsHere = new AccountDetailsIsHere();

  constructor(private accountService: AppServiceService) {}

  ngOnInit(): void {

  }

  saveAccountDetails(){

    this.accountService.createAccount(this.accountDetails).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){

    console.log(this.accountDetails);
    this.saveAccountDetails();

}



}
