import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
 
  @Output() isLogout = new EventEmitter<void>();

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit(): void {
    this.firebaseService.logout();
    this.isLogout.emit();
    this.router.navigateByUrl('/')
  }

}
