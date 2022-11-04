import { BuyService } from './buy.service';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { BuyComponent } from './buy/buy.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FiltersComponent,
    ProductItemComponent,
    BuyComponent,
    CheckoutComponent,
    HomeComponent
  ],



  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService, BuyService],

  bootstrap: [AppComponent]

})
export class AppModule { }
