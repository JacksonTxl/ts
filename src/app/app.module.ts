import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { CustomerModuleModule } from './customer-module/customer-module.module';
import { TestPipe } from './util/pipe/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    CustomerModuleModule
=======
import { ElModule } from 'element-angular';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    NgJsonEditorModule
>>>>>>> 1c4bd6526524447343b4e50a1f3ead8f42837b88
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
