import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerModuleModule } from './customer-module/customer-module.module';
import { TestPipe } from './util/pipe/test.pipe';
import { HighlightDirective } from './util/directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    CustomerModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
