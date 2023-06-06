import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';


const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:'hero', component: HeroComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'task', component: TaskComponent},

  { path: "", redirectTo:'/login', pathMatch:'full'},
  { path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
