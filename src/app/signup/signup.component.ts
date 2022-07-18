import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string=""
  lastName:string=""
  email:string="" //instance variable 
  password:string=""

  constructor() { }

  ngOnInit(): void {
    console.log("Signup....component....");    
  }

  printData(){

    console.log(this.email);//this -> email 
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.password);
    
  }
}
