import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
},{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',

},
{
  path:'admin',
  component:DashboardComponent,
  pathMatch:'full',

},
{
  path:'user',
  component:UserDashboardComponent,
  pathMatch:'full',

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
