import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; /* nos permite cuadrar la navegación que tiene nuestro usuario después de completar alguna acción */
import Swal from 'sweetalert2'; /*Aquí importamos Swalert*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('nologin') btn_nologin?: ElementRef;

  constructor(private fb: FormBuilder, private router: Router, private renderer2: Renderer2) {
    this.loginForm = this.fb.group({
      correoLogin: ['', [Validators.required, Validators.email]],
      contrasenaLogin: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  verificarLogin(){
    console.log(this.loginForm.get('correoLogin')?.value);
    this.router.navigate(['']);
    Swal.fire({
      title: 'Acceso exitoso',
      text: "¡Bienvenid@!",
      icon: 'success',
      showConfirmButton: false,
      timer: 4000
    })
  }

  cambioBoton(){
    const btn = this.btn_nologin?.nativeElement;
    console.log(btn);
  }
}



