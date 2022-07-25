import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

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

  firstNameError = ""
  emailError = "" 

  constructor(private router:Router,private sessionService:SessionService) { }

  ngOnInit(): void {
    console.log("Signup....component....");    
  }

  signup(){

    console.log(this.email);//this -> email 
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.password);
    

    //validation - required 
    let isError  = false 
    if(this.firstName == "" || this.firstName.trim().length == 0 ){
      isError = true; 
      this.firstNameError  = "Please Enter FirstName"
    }else{
      this.firstNameError = ""
    }

    //XX@XX.XXX
    if(this.email == "" || this.email.trim().length == 0 ){
      isError = true;
      this.emailError = "Please Enter Email"
    }else{
      this.emailError = ""
    }
    
    if(isError == true ){
      console.log("Error ");
      
    }else{
      //login   

      //api call 
      //service -- api call -- logic 

      let data = {
        "firstName":this.firstName,
        "email":this.email,
        "password":this.password,
        "lastName":this.lastName,
        "role":"62b9c4ee405221ef911914ef"
      }
       this.sessionService.signupApi(data).subscribe(resp=>{
          console.log("api response ");
          console.log(resp);
       });
      this.router.navigateByUrl("/login");

    }
    //validation - format 
    //email duplicate

    //db save 

    //redirect login 
  }
}
