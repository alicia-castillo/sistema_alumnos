import { Injectable } from '@angular/core';
import { listaAlumnosI } from '../../modelos/listaAlumnos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../alumno';

@Injectable({
  providedIn: 'root'
})
export class ListadoAlumnosService {

  url:string = "http://localhost:8080/alumnos";
  constructor(private http:HttpClient) { }

  getAlumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.url);
  }

  agregarAlumno(alumno: Alumno): Observable<Object>{
    return this.http.post(this.url, alumno);
  }
}
