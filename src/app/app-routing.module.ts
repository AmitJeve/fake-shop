import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { BuyComponent } from './buy/buy.component';

import { NavComponent } from './components/shared/nav/nav.component';

const routes: Routes = [

 {path:'', component:HomeComponent}, //home component
// {path:'cart', component: CartCompComponent},
{path:'cart',component:CheckoutComponent},
      {path:'buy',component:BuyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
