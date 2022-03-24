import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from '../auth/auth.module';
import { SignInComponent } from '../auth/components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
    ],
  exports: [HeaderComponent, HomeComponent]
})
export class SharedModule { }
