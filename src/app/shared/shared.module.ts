import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from '../auth/auth.module';
import { SignInComponent } from '../auth/components/sign-in/sign-in.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
    ],
  exports: [HeaderComponent, HomeComponent, ContactUsComponent]
})
export class SharedModule { }
