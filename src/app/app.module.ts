import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'

import { DropdownModule } from 'primeng/dropdown';

import { AlumnoModule } from './alumno/alumno.module'

var myRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AlumnoModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  exports: [
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
