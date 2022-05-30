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
      /*[
        {
          id_alumno: 1,
          nombre: "alicia",
          apellido_paterno: "castillo",
          apellido_materno: "juarez",
          fecha_nacimiento: '10/12/1995',
          grado_estudios: "Licenciatura",
          sexo: "F",
          email: "correo@com",
          telefono_alumno: "string"
        }
      ];*/
      console.log(data);
      
    });
  }

}
