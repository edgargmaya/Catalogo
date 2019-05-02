import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { AgregarComponent } from './components/agregar/agregar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { BuscarComponent } from './components/buscar/buscar.component'

import { AlumnoService } from './services/alumno.service';
import { MessageService } from 'primeng/api';

var myRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'agregar-alumno',
        component: AgregarComponent
      },
      {
        path: 'eliminar-alumno',
        component: EliminarComponent
      },
      {
        path: 'buscar-alumno',
        component: BuscarComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ToastModule,
    RouterModule.forChild(myRoutes)
  ],
  providers: [
    AlumnoService,
    MessageService
  ]
})
export class AlumnoModule { }
