import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  isSignedIn = false
  email: string = "";
  password: string = "";
  constructor(public firebaseService: FirebaseService,public router: Router) { 
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


  async onSignin()
  {
    await this.firebaseService.signin(this.email, this.password)
    if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn = true
      this.router.navigateByUrl('/')
    }
  }
}
