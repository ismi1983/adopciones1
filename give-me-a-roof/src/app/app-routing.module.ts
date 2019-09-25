import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';


const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
