import { Component, OnInit } from '@angular/core';
import { ListadoAlumnosService } from '../../servicios/servicio_alumnos/listado-alumnos.service';
import { listaAlumnosI } from '../../modelos/listaAlumnos.interface';
import { Alumno } from '../../alumno';

@Component({
  selector: 'app-listas-alumnos',
  templateUrl: './listas-alumnos.component.html',
  styleUrls: ['./listas-alumnos.component.css']
})
export class ListasAlumnosComponent implements OnInit {
  alumnos: Alumno[];
  constructor(private api:ListadoAlumnosService) {

   }

  ngOnInit(): void {
    this.getAlumnos();
  }

  private getAlumnos(){
    console.log("entra a get data");
    this.api.getAlumnos().subscribe(data=>{
      this.alumnos = data;
      console.log(data);
      
    });
  }

}
