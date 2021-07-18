import { Component, OnInit } from '@angular/core';
import {Home} from './home' 
import {Router} from '@angular/router'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  model=new Home()

  save(){
    console.log("Username",this.model.username)
    console.log("Email",this.model.email)
    console.log("Password",this.model.password)
    console.log("Mobile",this.model.mobile)
  }

}
