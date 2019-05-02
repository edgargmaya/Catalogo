import { Component, OnInit, OnChanges } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  operations: SelectItem[];
  operation: string = null;

  private DASHBOARD: string = 'dashboard/';

  constructor( private _router: Router ) {

    this.operations = [
      { label: 'Seleccione', value: null },
      { label: 'Agregar Alumno', value: 'agregar-alumno' },
      { label: 'Eliminar Alumno', value: 'eliminar-alumno' },
      { label: 'Ver Alumnos', value: 'buscar-alumno' }
    ];

  }

  cambio(){
    if( this.operation != null ){
      this._router.navigate( [ this.DASHBOARD + this.operation ] );
    }
  }

  ngOnInit() {
  }

}
