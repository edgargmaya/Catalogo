import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Alumno } from '../models/alumno.model'

import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AlumnoService {

  constructor(private $_http_client: HttpClient) { }

  public getService(): Observable<any> {
    return this.$_http_client.get("http://localhost:8095/angular/alumno", { observe: 'response' })
      .pipe(
        map(res => {
          console.log(res);
          return res.body;
        })
      );
  }

  public getServiceById( id: number ): Observable<any> {
    return this.$_http_client.get("http://localhost:8095/angular/alumno/" + id, { observe: 'response' })
      .pipe(
        map( res => {
          console.log(res);
          return res.body;
        }),
        catchError( ( err : any ) => {
          if ( err instanceof HttpErrorResponse ) {
            if( err.error.message === "No value present" ){
              console.log("No hay datos asociados");
              return throwError("No se encontró ningún Alumno con ese Id");
            }
            return throwError(err);
          } else {
            console.error( "Error ::: ", err );
            return throwError("Ocurrio un Error fuera");
          }
        })
      );
  }

  public postService( alumno: Alumno ) {
    return this.$_http_client.post("http://localhost:8095/angular/alumno", alumno );
  }

  public deleteService(id: number) {
    return this.$_http_client.delete("http://localhost:8095/angular/alumno/" + id, { observe: 'response' } )
    .pipe(
      map( res => {
        console.log( '>>>>>' + res );
        return res.body;
      }),
      catchError( err => {
        return throwError(err);
      })    
    )
  }

}
