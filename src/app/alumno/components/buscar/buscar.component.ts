import { Component, OnInit } from '@angular/core';

import { Alumno } from '../../models/alumno.model';

import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  alumnos: Array<Alumno>;

  constructor( private $_alumno_service: AlumnoService ) {
    this.getAlumnos();
  }

  ngOnInit() { }
  
  getAlumnos(){
    this.$_alumno_service.getService().subscribe(
      data => {
        console.log( data );
        this.alumnos = data;
      },
      err => {
        console.log( err );
       }
    );
  }

  

}
