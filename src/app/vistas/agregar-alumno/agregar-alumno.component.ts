import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/alumno';
import { ListadoAlumnosService } from 'src/app/servicios/servicio_alumnos/listado-alumnos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {

  alumno: Alumno = new Alumno();
  alumnoForm  = new FormGroup({
    nombre : new FormControl(null, Validators.required),
    apellido_paterno : new FormControl(null, Validators.required),
    apellido_materno : new FormControl(null, Validators.required),
    fecha_nacimiento : new FormControl(null, Validators.required),
    sexo : new FormControl(null, Validators.required),
    grado_estudios : new FormControl(null, Validators.required),
    email : new FormControl(null, [Validators.required, Validators.email]),
    telefono_alumno : new FormControl(null, Validators.required),
  });

  constructor(private api:ListadoAlumnosService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarAlumno(){
    this.api.agregarAlumno(this.alumno).subscribe(data=>{
      console.log(data);
      alert("empleado guardado");
    }, error=>{
      alert("ERROR EN LOS DATOS");
      console.log(error)
    });
  }

  onSubmit(form: any){
    console.log("este es el form")
    console.log(form);

    this.agregarAlumno();
  }
}
