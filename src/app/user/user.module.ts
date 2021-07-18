import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ]
})
export class UserModule { }
