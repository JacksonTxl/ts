import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElModule } from 'element-angular';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
