import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { AuthModule } from './auth/auth.module';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SignoutComponent } from './auth/components/signout/signout.component';

const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'signout', component: SignoutComponent}
];


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'blog-app'),
    RouterModule.forRoot(routes),
    AuthModule,
    FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
