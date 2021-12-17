import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


  arregloArena: any[] = [];
  arregloBolsas: any[] = [];
  arregloGalletas: any[] = [];
  arregloBocaditos: any [] = [];
  arregloGranola: any [] = [];
  arregloUntables: any [] = [];
  arregloOtros: any [] = [];

  @ViewChild('subtotal') sub_total?:ElementRef;
  @ViewChild('total') granTotal?:ElementRef;
  @ViewChild ('stbolsas') st_bolsas?:ElementRef;
  @ViewChild ('starena') st_arena?:ElementRef;
  @ViewChild ('stbocaditos') st_bocaditos?:ElementRef;

  constructor(private renderer2: Renderer2, private router: Router) { }

  ngOnInit(): void {

    let cuentaArena = 0;
    let cuentaBolsas = 0;
    let cuentaGalletas = 0;
    let cuentaBocaditos = 0;
    let cuentaGranola = 0;
    let cuentaUntables = 0;
    let cuentaOtros = 0;
    let subTotal = 0;
    let granTotal = 0;

  setTimeout(()=>{
        
    let arenaLocal: any = localStorage?.getItem('arena');
    let arena = JSON.parse(arenaLocal);
    
    let bolsasLocal: any = localStorage?.getItem('bolsas');
    let bolsas = JSON.parse(bolsasLocal);
    
    let galletasLocal: any = localStorage?.getItem('galletas');
    let galletas = JSON.parse(galletasLocal);
    
    let bocaditosLocal: any = localStorage?.getItem('bocaditos');
    let bocaditos = JSON.parse(bocaditosLocal);
    
    let granolaLocal: any = localStorage?.getItem('granola');
    let granola = JSON.parse(granolaLocal);
    
    let untablesLocal: any = localStorage?.getItem('untables');
    let untables = JSON.parse(untablesLocal);
    
    let otrosLocal: any = localStorage?.getItem('otros');
    let otros = JSON.parse(otrosLocal);

    this.arregloArena = []
    this.arregloBolsas = []
    this.arregloGalletas = []
    this.arregloBocaditos = []
    this.arregloGranola = []
    this.arregloUntables = []
    this.arregloOtros = []

    if(arena){
      this.arregloArena = [arena];
    }
    if(bolsas){
      this.arregloBolsas = [bolsas];
    }
    if(bocaditos){
      this.arregloBocaditos = bocaditos;
    }
    if(galletas){
      this.arregloGalletas = [galletas];
    }
    if(granola){
      this.arregloGranola = [granola];
    }
    if(untables){
      this.arregloUntables = [untables];
    }
    if(otros){
      this.arregloOtros = [otros];
    }

    console.log(this.arregloArena);
    console.log(this.arregloBolsas);

    // console.log(this.arregloBolsas);
    
    if (arena){
      arena.info.forEach(elemento =>{
        cuentaArena += elemento.precio * elemento.cantidad;
      })
      // console.log(cuentaArena);
    }

    if (bolsas){
      bolsas.info.forEach(elemento =>{
        cuentaBolsas += elemento.precio * elemento.cantidad;
      })
      // console.log(cuentaBolsas);
    }    

    if (galletas){
      galletas.info.forEach(elemento =>{
        cuentaBolsas += elemento.precio * elemento.cantidad;
      })
      // console.log(cuentaGalletas);
    }    

    if (bocaditos){
      // console.log(bocaditos);
      bocaditos.forEach((elemento) =>{
        for (const info of elemento.info) {
          cuentaBocaditos += info.precio * info.cantidad;
        }
      })
      console.log(cuentaBocaditos);
    }

    if (granola){
      granola.info.forEach(elemento =>{
        cuentaGranola += elemento.precio * elemento.cantidad;
      })
      console.log(cuentaGranola); 
    }
    
    if(untables){
      untables.info.forEach(elemento =>{
        cuentaUntables += elemento.precio * elemento.cantidad;
      })
      console.log(cuentaUntables);    
    }
    
    if(otros){
      otros.info.forEach(elemento =>{
        cuentaOtros += elemento.precio * elemento.cantidad;
      })
      console.log(cuentaOtros);
    }

    console.log(cuentaBolsas);
    console.log(cuentaArena);
    console.log(cuentaBocaditos);

    let subtotal = this.sub_total?.nativeElement;
    let total = this.granTotal?.nativeElement;

    subTotal = cuentaArena + cuentaBolsas + cuentaBocaditos;
    subtotal.textContent = subTotal;

    granTotal = subTotal + 6000;
    // console.log(granTotal);

    total.textContent = granTotal;

    }, 2000);

    setTimeout(() => {

      if(this.st_bolsas?.nativeElement){
      let stbolsas = this.st_bolsas?.nativeElement;
      stbolsas.textContent = cuentaBolsas;
    }

    if(this.st_arena?.nativeElement){
      let starena = this.st_arena?.nativeElement;
      starena.textContent = cuentaArena;
    }

    if(this.st_bocaditos?.nativeElement){
      let stbocaditos = this.st_bocaditos?.nativeElement;
      stbocaditos.textContent = cuentaBocaditos;
    }
    }, 2000)
  }

  pagar(){
    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(['']);
    }, 4000)
    Swal.fire({
      title: 'Muchas gracias por tu compra',
      text: 'Vuelve pronto',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
