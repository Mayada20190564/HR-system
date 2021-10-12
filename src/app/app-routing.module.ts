import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepProfileComponent } from './departements/dep-profile/dep-profile.component';
import { ListDepsComponent } from './departements/list-deps/list-deps.component';
import { CreatEmployeeComponent } from './employees/creat-employee/creat-employee.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { ProfileComponent } from './employees/profile/profile.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { CreateManagerComponent } from './managers/create-manager/create-manager.component';
import { ListManagersComponent } from './managers/list-managers/list-managers.component';
import { ProfileManagerComponent } from './managers/profile-manager/profile-manager.component';
import { UpdateManagerComponent } from './managers/update-manager/update-manager.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path : "home" , component: HomeComponent},
  {path : "" , component : HomeComponent},
  {path:"list-e" , component:ListEmployeesComponent},
  {path:"create-e" , component: CreatEmployeeComponent},
  {path:"update-e/:id" , component:UpdateEmployeeComponent},
  {path : "profile-e/:id" , component:ProfileComponent},
  {path:"list-m" , component:ListManagersComponent},
  {path:"create-m" , component: CreateManagerComponent},
  {path:"update-m/:id" , component:UpdateManagerComponent},
  {path : "profile-m/:id" , component:ProfileManagerComponent},
  {path : "allDeps" , component : ListDepsComponent},
  {path : "profile-dep/:id" , component:DepProfileComponent},
  {path : "**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
