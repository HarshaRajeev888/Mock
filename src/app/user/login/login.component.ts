import { Component, OnInit } from '@angular/core';
import {Login} from './login'
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
 


  ngOnInit(): void {
  }
  model=new Login("","")
  login(){
    console.log("Email",this.model.email)
    console.log("Password",this.model.password)
  }
}
