import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contactanos } from 'src/app/models/contactanos';
import { Router } from '@angular/router'; /* nos permite cuadrar la navegación que tiene nuestro usuario después de completar alguna acción */
import Swal from 'sweetalert2'; /*Aquí importamos Swalert*/

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

    contactanosForm: FormGroup;
    valorNumerico = /^[0-9]+$/;

  constructor(private fb: FormBuilder, private router: Router) { /* Acá también hay que declarar router */
      this.contactanosForm = this.fb.group({
        nombreContacto: ['', Validators.required],
        correoContacto: ['', [Validators.required, Validators.email]],
        telefonoContacto: ['', [Validators.required, Validators.pattern(this.valorNumerico)]],
        mensajeContacto: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  guardarMensaje(){
    console.log(this.contactanosForm.get('nombreContacto')?.value);

    const CONTACTO: Contactanos = {

      nombre: this.contactanosForm.get('nombreContacto')?.value,
      correo: this.contactanosForm.get('correoContacto')?.value,
      telefono: this.contactanosForm.get('telefonoContacto')?.value,
      mensaje: this.contactanosForm.get('mensajeContacto')?.value
    }

    console.log(CONTACTO);
    this.router.navigate(['']);
    Swal.fire({
      title: 'Mensaje Enviado',
      text: "Pronto te contactaremos.",
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

}

