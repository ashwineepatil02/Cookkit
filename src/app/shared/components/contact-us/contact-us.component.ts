import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  isSignedIn = false
  constructor(public firebaseService: FirebaseService) {
    this.isSignedIn;
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
