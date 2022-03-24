import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isSignedIn = false;
  email: string = "";
  password: string = "";
  constructor(public firebaseService: FirebaseService, public router: Router) {
    this.email;
    this.password;
   }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null)
    {
      this.isSignedIn = true
    }
    else{
      this.isSignedIn = false
    }
  }

  
    async onSignup()
    {
      await this.firebaseService.signup(this.email, this.password)
      if(this.firebaseService.isLoggedIn)
      {
        this.isSignedIn = true
        this.router.navigateByUrl('/')
      }
      
    }


  }


