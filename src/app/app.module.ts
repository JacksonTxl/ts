import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElModule } from 'element-angular';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
