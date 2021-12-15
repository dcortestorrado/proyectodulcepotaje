import { Component, OnInit, Renderer2, ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

import { Contactanos } from 'src/app/models/contactanos';
import { ContactanosService } from 'src/app/services/contactanos.service';

import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

import { Crear } from 'src/app/models/crearcuenta';
import { CrearcuentaService } from 'src/app/services/crearcuenta.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('divinventario') div_inventario?: ElementRef;
  @ViewChild('divmensajes') div_mensajes?: ElementRef;
  @ViewChild('divcuentas') div_cuentas?: ElementRef;

  @ViewChild('botoninventario') boton_inventario?: ElementRef;
  @ViewChild('botonmensajes') boton_mensajes?: ElementRef;
  @ViewChild('botoncuentas') boton_cuentas?: ElementRef;

  constructor(private renderer2: Renderer2, private _contactanosService: ContactanosService, private _inventarioService: InventarioService, private _crearcuentaService: CrearcuentaService, private router: Router) { }

  listaContactos: Contactanos[] = [];
  listaInventario: Inventario[] = [];
  listaCuentas: Crear[] = [];
  
  ngOnInit(): void {
    this.obtenerContactos();
    this.obtenerInventario();
    this.obtenerCuentas();
  }
  
  obtenerContactos(){
    this._contactanosService.getContactos().subscribe(data =>{
      console.log(data);
      this.listaContactos = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerInventario(){
    this._inventarioService.getInventario().subscribe(data =>{
      console.log(data);
      this.listaInventario = data;
    }, error => {
      console.log(error);
    });
  }

  obtenerCuentas(){
    this._crearcuentaService.getCuentas().subscribe(data =>{
      console.log(data);
      this.listaCuentas = data;
    }, error => {
      console.log(error);
    });
  }
  
  cambioSeccion(arg: number){
    const inventario = this.boton_inventario?.nativeElement;
    const mensajes = this.boton_mensajes?.nativeElement;
    const cuentas = this.boton_cuentas?.nativeElement;

    const seccionInventario = this.div_inventario?.nativeElement;
    const seccionMensajes = this.div_mensajes?.nativeElement;
    const seccionCuentas = this.div_cuentas?.nativeElement;

    this.renderer2.removeClass(inventario, 'btn-dark');
    this.renderer2.removeClass(inventario, 'btn-light');
    
    this.renderer2.removeClass(mensajes, 'btn-dark');
    this.renderer2.removeClass(mensajes, 'btn-light');
    
    this.renderer2.removeClass(cuentas, 'btn-light');
    this.renderer2.removeClass(cuentas, 'btn-dark');
    
    this.renderer2.removeClass(seccionInventario, 'clase-quitar');
    this.renderer2.removeClass(seccionMensajes, 'clase-quitar');
    this.renderer2.removeClass(seccionCuentas, 'clase-quitar');

    if (arg == 1){
      // El orden es Inventario - Mensajes - Cuentas
      this.renderer2.addClass(inventario, 'btn-dark');
      this.renderer2.addClass(mensajes, 'btn-light');
      this.renderer2.addClass(cuentas, 'btn-light');

      this.renderer2.addClass(seccionMensajes, 'clase-quitar');
      this.renderer2.addClass(seccionCuentas, 'clase-quitar');
      
    } else if (arg == 2){
      this.renderer2.addClass(inventario, 'btn-light');
      this.renderer2.addClass(mensajes, 'btn-dark');
      this.renderer2.addClass(cuentas, 'btn-light');

      this.renderer2.addClass(seccionInventario, 'clase-quitar');
      this.renderer2.addClass(seccionCuentas, 'clase-quitar');

    } else if (arg == 3){
      this.renderer2.addClass(inventario, 'btn-light');
      this.renderer2.addClass(mensajes, 'btn-light');
      this.renderer2.addClass(cuentas, 'btn-dark');

      this.renderer2.addClass(seccionInventario, 'clase-quitar');
      this.renderer2.addClass(seccionMensajes, 'clase-quitar');
    }
  }

  eliminarContacto(id: any){
    Swal.fire({
      title: '¿Desea eliminar el mensaje?',
      text: 'Esta acción es irreversible.',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Eliminar',
      cancelButtonColor: '#d33'

    }).then((resultado) => {
      if (resultado.isConfirmed){
        this._contactanosService.deleteContacto(id).subscribe(data => {
          Swal.fire({
            title: 'Mensaje eliminado',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
        }, error => {
          console.log(error);
        })
      };
      this.obtenerContactos();
    })  
  }

  eliminarCuenta(id: any){
    Swal.fire({
      title: '¿Desea eliminar esta cuenta?',
      text: 'Esta acción es irreversible.',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Eliminar',
      cancelButtonColor: '#d33'

    }).then((resultado) => {
      if (resultado.isConfirmed){
        this._crearcuentaService.deleteCuenta(id).subscribe(data => {
          Swal.fire({
            title: 'Mensaje eliminado',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
        }, error => {
          console.log(error);
        })
      };
      this.obtenerContactos();
    })
  }

  // actualizarCuenta(){
  //   if (this.id !== null){
  //     //se edita
  //     this._crearcuentaService.putCuenta(this.id, CREAR).subscribe(data =>{
  //       console.log(data);
  //       Swal.fire({
  //         title: 'Cuenta eliminada',
  //         icon: 'success',
  //         showConfirmButton: false,
  //         timer: 2000
  //       })
  //       this.router.navigate(['/admin']);
  //     }, error => {
  //       console.log(error)
  //     })
  //   } else {
  //     process.exit(1);
  //   }
  // }
}
