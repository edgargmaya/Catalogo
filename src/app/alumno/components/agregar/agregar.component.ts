import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from 'primeng/api';

import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  alumno: Alumno = {
    name: "",
    primerApellido: "",
    segundoApellido: "",
    calificacion: null,
    id: null,
  };

  @Input('alumno')
  set SetAlumno( tmpAlumno: Alumno ){
    if( tmpAlumno != null ){
      this.alumno = tmpAlumno;
    }
  }

  @Input()
  mode: boolean = true;

  constructor( private $_alumno_servicio : AlumnoService, private $_message_service: MessageService ) { }

  ngOnInit() { }

  onEnviar( obj : any ){
    if ( obj.valid ){
      this.$_alumno_servicio.postService( this.alumno ).subscribe( () => {
        this.$_message_service.add( { severity:'success', summary:'Alumno', detail:'Alumno agregado correctamente' } );
        obj.reset();
      }, err => {
        console.error( err );
      });
    }
  }

}