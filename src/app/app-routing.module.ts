import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HerosComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import{ HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
 { path: 'dashboard', component: DashboardComponent },
 { path: 'detail/:id', component: HeroDetailComponent },
 { path: 'heros', component: HerosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
