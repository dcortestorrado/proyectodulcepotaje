import { Component, OnInit, Renderer2, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('divmensajes') div_mensajes?: ElementRef;
  @ViewChild('divinventario') div_inventario?: ElementRef;
  @ViewChild('botonmensajes') boton_mensajes?: ElementRef;
  @ViewChild('botoninventario') boton_inventario?: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }
  
  cambioSeccion(arg: number){
    const mensajes = this.boton_mensajes?.nativeElement;
    const inventario = this.boton_inventario?.nativeElement;

    const seccionMensajes = this.div_mensajes?.nativeElement;
    const seccionInventario = this.div_inventario?.nativeElement;

    this.renderer2.removeClass(mensajes, 'btn-light');
    this.renderer2.removeClass(mensajes, 'btn-dark');

    this.renderer2.removeClass(inventario, 'btn-light');
    this.renderer2.removeClass(inventario, 'btn-dark');

    this.renderer2.removeClass(seccionInventario, 'clase-quitar');
    this.renderer2.removeClass(seccionMensajes, 'clase-quitar');

    if (arg == 1){

      this.renderer2.addClass(inventario, 'btn-dark');
      this.renderer2.addClass(seccionMensajes, 'clase-quitar');
      this.renderer2.addClass(mensajes, 'btn-light');
      
    } else {
      this.renderer2.addClass(mensajes, 'btn-dark');
      this.renderer2.addClass(seccionInventario, 'clase-quitar');
      this.renderer2.addClass(inventario, 'btn-light');
    }
  }
}
