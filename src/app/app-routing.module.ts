import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ListasAlumnosComponent } from './vistas/listas-alumnos/listas-alumnos.component';
import { AgregarAlumnoComponent } from './vistas/agregar-alumno/agregar-alumno.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'inicio', 
    component:InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listas_alumnos', 
    component: ListasAlumnosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agregar_alumno', 
    component: AgregarAlumnoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [LoginComponent, InicioComponent, ListasAlumnosComponent]