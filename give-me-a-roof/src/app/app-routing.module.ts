import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dogs',
    component: DogsComponent,
  },
  {
    path: 'dogs/create',
    component: CreateDogComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
