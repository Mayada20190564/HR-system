import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreatEmployeeComponent } from './employees/creat-employee/creat-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { ProfileComponent } from './employees/profile/profile.component';
import { CreateManagerComponent } from './managers/create-manager/create-manager.component';
import { ListManagersComponent } from './managers/list-managers/list-managers.component';
import { UpdateManagerComponent } from './managers/update-manager/update-manager.component';
import { ProfileManagerComponent } from './managers/profile-manager/profile-manager.component';
import { ListDepsComponent } from './departements/list-deps/list-deps.component';
import { DepProfileComponent } from './departements/dep-profile/dep-profile.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListEmployeesComponent,
    CreatEmployeeComponent,
    UpdateEmployeeComponent,
    ProfileComponent,
    CreateManagerComponent,
    ListManagersComponent,
    UpdateManagerComponent,
    ProfileManagerComponent,
    ListDepsComponent,
    DepProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
