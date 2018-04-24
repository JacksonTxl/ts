import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElModule } from 'element-angular';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
