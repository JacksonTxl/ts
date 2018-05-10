import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerModuleModule} from './customer-module/customer-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
