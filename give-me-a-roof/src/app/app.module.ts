import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogComponent } from './components/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogsComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
