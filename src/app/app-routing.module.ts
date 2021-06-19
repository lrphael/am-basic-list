import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroHomeComponent } from './pages/hero-home/hero-home.component';
import { HeroFormComponent } from './pages/hero-form/hero-form.component';

const routes: Routes = [
  { path: '', component: HeroHomeComponent },
  { path: 'form', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
