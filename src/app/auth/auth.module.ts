import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SignoutComponent } from './components/signout/signout.component';
import { HeaderComponent } from '../shared/components/header/header.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignoutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    SignoutComponent
  ]
})
export class AuthModule { }
