import { Component, Input, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/auth/components/sign-in/sign-in.component';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSignedIn = false

  constructor(public firebaseService: FirebaseService) { 
    this.isSignedIn
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

   
  
}
