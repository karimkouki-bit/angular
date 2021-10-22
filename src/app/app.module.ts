import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
/*import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    GoodsComponent,
    NotfoundComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

   /* AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule*/


  ],








  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
