import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  alumno: Alumno;

  searchId: number;

  constructor( private $_alumno_service: AlumnoService, private $_message_service: MessageService ) { }

  ngOnInit() {
  }

  onEnviar( form: any ){
    this.$_alumno_service.getServiceById( form.value.id ).subscribe( alumno => {
      console.log( alumno );
      this.alumno = alumno;
    }, err => {
      console.error("Error ::: ", err );
      this.alumno = null;
      this.$_message_service.add( { severity:'error', summary:'Alumno', detail: err } );
    });
  }

  onDelete( form: any ){
    this.$_alumno_service.deleteService( form.value.id ).subscribe( data => {
      console.log( data );
      this.alumno = null;
      this.$_message_service.add( { severity:'success', summary:'Alumno', detail: 'Alumno eliminado con éxito' } );
    });
  }

  validaAlumno() : boolean {
    if ( this.alumno != null )
     return false;
    else 
      return true;
  }

}
