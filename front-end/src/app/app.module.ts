import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TanourasComponent } from './components/tanouras/tanouras.component';
import { NewTanouraComponent } from './components/new-tanoura/new-tanoura.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NewOrderComponent } from './components/new-order/new-order.component';

@NgModule({
  declarations: [
    AppComponent,
    TanourasComponent,
    NewTanouraComponent,
    OrdersComponent,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
