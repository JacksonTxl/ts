import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
