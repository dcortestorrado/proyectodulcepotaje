import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Crear } from 'src/app/models/crearcuenta';
import { Router } from '@angular/router'; /* nos permite cuadrar la navegación que tiene nuestro usuario después de completar alguna acción */
import Swal from 'sweetalert2'; /*Aquí importamos Swalert*/
import { CrearcuentaService } from 'src/app/services/crearcuenta.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css'],
})
export class CrearcuentaComponent implements OnInit {
  crearForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _crearcuentaService: CrearcuentaService
  ) {
    this.crearForm = this.fb.group({
      nombreCrear: ['', Validators.required],
      correoCrear: ['', [Validators.required, Validators.email]],
      contrasenaCrear: ['', Validators.required],
      verificarcontraCrear: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  crearUsuario() {
    const CREAR: Crear = {
      nombre: this.crearForm.get('nombreCrear')?.value,
      correo: this.crearForm.get('correoCrear')?.value,
      contrasena: this.crearForm.get('contrasenaCrear')?.value,
    };

    this._crearcuentaService.postCuenta(CREAR).subscribe(
      (data) => {
        console.log('Este es el log');
        this.router.navigate(['']);
        Swal.fire({
          title: 'Cuenta Creada',
          text: 'La cuenta ha sido creada con éxito.',
          icon: 'success',
          showConfirmButton: false,
          timer: 5000,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
