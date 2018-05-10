import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponentComponent} from './customer-component/customer-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerComponentComponent],
  exports: [CustomerComponentComponent]
})
export class CustomerModuleModule { }
