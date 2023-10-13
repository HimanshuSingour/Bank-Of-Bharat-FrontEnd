import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [

  {
    path : 'account-create',
    component: AccountCreateComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },

  {
    path : 'account-detail',
    component: AccountDetailsComponent
  },

  {
    path: 'update-details',
    component: UpdateDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
