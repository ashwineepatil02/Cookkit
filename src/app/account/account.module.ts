import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';
import { SavedBlogsComponent } from './components/saved-blogs/saved-blogs.component';
import { LikedBlogsComponent } from './components/liked-blogs/liked-blogs.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MyAccountComponent,
    MyBlogsComponent,
    SavedBlogsComponent,
    LikedBlogsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    MyAccountComponent,
    MyBlogsComponent,
    SavedBlogsComponent,
    LikedBlogsComponent
  ]
})
export class AccountModule { }
