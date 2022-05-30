import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm  = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  usuario:string = "admin";
  password:string= "admin";

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("logged", "false");
  }

  onLogin(form: any){
    console.log(form);
    if(form.usuario==="admin" && form.password==="admin"){
      console.log("logged!");
      localStorage.setItem("logged", "true");
      this.router.navigate(["inicio"]);
    }else{
      alert("ERROR CREDENCIALES INCORRECTAS INCORRECTAS");
    }
  }

}
