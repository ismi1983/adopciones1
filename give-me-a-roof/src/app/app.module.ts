import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogComponent } from './components/dog/dog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { SignupComponent } from './components/signup/signup.component';

import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogsComponent,
    DogComponent,
    HomeComponent,
    LoginComponent,
    CreateDogComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
