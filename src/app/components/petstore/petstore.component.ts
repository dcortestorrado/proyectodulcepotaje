import { Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { imagenesPetstore } from 'src/assets/directorioimagenes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-petstore',
  templateUrl: './petstore.component.html',
  styleUrls: ['./petstore.component.css']
})
export class PetstoreComponent implements OnInit {

  @ViewChild('imagenbolsa') img_bolsa?: ElementRef;
  @ViewChild('imagenarena') img_arena?: ElementRef;

  @ViewChild('bolsas') h_bolsas?:ElementRef;
  @ViewChild('pbolsas1') p_bolsas1?:ElementRef;
  @ViewChild('pbolsas2') p_bolsas2?:ElementRef;
  @ViewChild('preciobolsas1') precio_bolsas1?:ElementRef;
  @ViewChild('preciobolsas2') precio_bolsas2?:ElementRef;

  @ViewChild('arena') h_arena?:ElementRef;
  @ViewChild('parena1') p_arena1?:ElementRef;
  @ViewChild('parena2') p_arena2?:ElementRef;
  @ViewChild('parena3') p_arena3?:ElementRef;
  @ViewChild('precioarena1') precio_arena1?:ElementRef;
  @ViewChild('precioarena2') precio_arena2?:ElementRef;
  @ViewChild('precioarena3') precio_arena3?:ElementRef;
  
  constructor(private renderer2: Renderer2) {

  }

  bolsasStorage(arg: number){
    let bolsas = this.h_bolsas?.nativeElement;
    let pbolsas1 = this.p_bolsas1?.nativeElement;
    let pbolsas2 = this.p_bolsas2?.nativeElement;
    let preciobolsas1 = this.precio_bolsas1?.nativeElement;
    let preciobolsas2 = this.precio_bolsas2?.nativeElement;

    let arregloPrecios = [preciobolsas1, preciobolsas2];

    console.log(bolsas);

    class Carrito {
      articulo: string;
      info: any;
      
      constructor(articulo: string, info: []){
        this.articulo = articulo;
        this.info = info;
      }
    }
    let cantidadBolsas = 0;
    let precioBolsa = 0;
    let presentacionBolsa = "";

    let comprasBolsas = new Carrito('', []);
    // console.log(comprasBolsas);

    arregloPrecios.forEach(elementoPrecio => {
      if(elementoPrecio.classList.contains("clase-quitar") == false){
        precioBolsa = parseInt(elementoPrecio.textContent);
        // console.log(precioBolsa);
        if(precioBolsa == 5500){
          presentacionBolsa = pbolsas1.textContent;
      } else{
        presentacionBolsa = pbolsas2.textContent;
      }
    }});

    //Si no hay nada en el carrito aún
    if (!localStorage.getItem('bolsas')){  

      if (arg == 2){

        cantidadBolsas += 1;
        console.log(bolsas);
        comprasBolsas.articulo = bolsas.textContent;
        comprasBolsas.info.push({'presentacion': presentacionBolsa, 'precio': precioBolsa, 'cantidad': cantidadBolsas});
        localStorage.setItem('bolsas', JSON.stringify(comprasBolsas));
        Swal.fire({
          title: 'Artículo agregado',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
          Swal.fire({
          title: 'No tienes artículos agregados',
          icon: 'warning',
          showConfirmButton: false,
          timer: 1000})
      }
      
    } 
    
    // Si hay algo antes
    else {
      let storage: any = localStorage.getItem('bolsas');
      let compras = JSON.parse(storage);
      localStorage.removeItem('bolsas');
      // console.log(compras);

      if (arg == 1){
        for (const entrada of compras.info) {
          if (presentacionBolsa == entrada.presentacion && entrada.cantidad > 0){
            entrada.cantidad--;
            localStorage.setItem('bolsas', JSON.stringify(compras))
            Swal.fire({
              title: 'Borraste un artículo',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000})
          } else if(presentacionBolsa == entrada.presentacion && entrada.cantidad ==0){
            Swal.fire({
              title: 'No tienes agregado este artículo',
              icon: 'warning',
              showConfirmButton: false,
              timer: 2000});
              localStorage.setItem('bolsas', JSON.stringify(compras));
        }
      } 
          } else {
            for (let i = 0; i < compras.info.length; i++){
              if (presentacionBolsa == compras.info[i].presentacion){
                // console.log(`${presentacionBolsa}, ${entrada.cantidad}`)
                compras.info[i].cantidad++;
                localStorage.setItem('bolsas', JSON.stringify(compras));
                Swal.fire({
                  title: 'Artículo agregado',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000});
                  return
            }}

              compras.info.push({'presentacion': presentacionBolsa, 'precio': precioBolsa, 'cantidad': 1})
              localStorage.setItem('bolsas', JSON.stringify(compras));
              Swal.fire({
                title: 'Artículo agregado',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000})                      
            }       
        }      
} 



  arenasStorage(arg: number){
    let arena = this.h_arena?.nativeElement;
    let parena1 = this.p_arena1?.nativeElement;
    let parena2 = this.p_arena2?.nativeElement;
    let parena3 = this.p_arena3?.nativeElement;
    let precioarena1 = this.precio_arena1?.nativeElement;
    let precioarena2 = this.precio_arena2?.nativeElement;
    let precioarena3 = this.precio_arena3?.nativeElement;

    let arregloPrecios = [precioarena1, precioarena2, precioarena3];

    console.log(arena);

    class Carrito {
      articulo: string;
      info: any;
      
      constructor(articulo: string, info: []){
        this.articulo = articulo;
        this.info = info;
      }
    }
    let cantidadArena = 0;
    let precioArena = 0;
    let presentacionArena = "";

    let comprasArena = new Carrito('', []);
    // console.log(comprasArena);

    arregloPrecios.forEach(elementoPrecio => {
      if(elementoPrecio.classList.contains("clase-quitar") == false){
        precioArena = parseInt(elementoPrecio.textContent);
        // console.log(precioArena);
        switch(precioArena){
          case 26000:
          presentacionArena = parena1.textContent;
          break;
          case 49500:
          presentacionArena = parena2.textContent;
          break;
          case 67000:
          presentacionArena = parena3.textContent;
        }
      }
    });

    //Si no hay nada en el carrito aún
    if (!localStorage.getItem('arena')){  

      if (arg == 2){

        cantidadArena += 1;
        console.log(arena.value);
        console.log(presentacionArena);
        console.log(precioArena);
        comprasArena.articulo = arena.textContent;
        comprasArena.info.push({'presentacion': presentacionArena, 'precio': precioArena, 'cantidad': cantidadArena});
        localStorage.setItem('arena', JSON.stringify(comprasArena));
        Swal.fire({
          title: 'Artículo agregado',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
          Swal.fire({
          title: 'No tienes agregado este artículo',
          icon: 'warning',
          showConfirmButton: false,
          timer: 1000})
      }
    } 
    
    // Si hay algo antes
    else {
      let storage: any = localStorage.getItem('arena');
      let compras = JSON.parse(storage);
      localStorage.removeItem('arena');
      // console.log(compras);

      if (arg == 1){
        for (const entrada of compras.info) {
          if (presentacionArena == entrada.presentacion && entrada.cantidad > 0){
            entrada.cantidad--;
            localStorage.setItem('arena', JSON.stringify(compras));
            Swal.fire({
              title: 'Borraste un artículo',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000})
          } else if(presentacionArena == entrada.presentacion && entrada.cantidad ==0){
            Swal.fire({
              title: 'No tienes artículos agregados',
              icon: 'warning',
              showConfirmButton: false,
              timer: 2000})
              localStorage.setItem('arena', JSON.stringify(compras));
        }
      } 
          } else {
            for (let i = 0; i < compras.info.length; i++){
              if (presentacionArena == compras.info[i].presentacion){
                // console.log(`${presentacionArena}, ${entrada.cantidad}`)
                compras.info[i].cantidad++;
                localStorage.setItem('arena', JSON.stringify(compras));
                Swal.fire({
                  title: 'Artículo agregado',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000});
                  return
              }} 
              
              
              compras.info.push({'presentacion': presentacionArena, 'precio': precioArena, 'cantidad': 1})
              localStorage.setItem('arena', JSON.stringify(compras));
              Swal.fire({
                title: 'Artículo agregado',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000})   
            }
          }     
}

  ngOnInit(): void {
  setTimeout(() =>{

    const bolsa = this.img_bolsa?.nativeElement;
    // console.log(bolsa);
    const arena = this.img_arena?.nativeElement;
    let imagenbolsa = imagenesPetstore.bolsas[0];
    // console.log(imagenbolsa);
    let imagenarena = imagenesPetstore.arenas[0];
    this.renderer2.setAttribute(bolsa, 'src', imagenbolsa);
    this.renderer2.setAttribute(arena, 'src', imagenarena);
  }, 500);
}

  presentacionBolsa(arg: number){
    const bolsa = this.img_bolsa?.nativeElement;
    let imagenbolsa = "";

    let preciobolsas1 = this.precio_bolsas1?.nativeElement;
    let preciobolsas2 = this.precio_bolsas2?.nativeElement;

    let arregloBolsas = [preciobolsas1, preciobolsas2];
    arregloBolsas.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

  
    if (arg == 1){
      imagenbolsa = imagenesPetstore.bolsas[0];
      this.renderer2.addClass(preciobolsas2, 'clase-quitar');
    } else {
      imagenbolsa = imagenesPetstore.bolsas[1];
      this.renderer2.addClass(preciobolsas1, 'clase-quitar');
    }

    this.renderer2.setAttribute(bolsa, 'src', imagenbolsa);
  }

  presentacionArena(arg: number){
    const arena = this.img_arena?.nativeElement;
    let imagenarena = "";

    let precioarena1 = this.precio_arena1?.nativeElement;
    let precioarena2 = this.precio_arena2?.nativeElement;
    let precioarena3 = this.precio_arena3?.nativeElement;

    let arregloArenas = [precioarena1, precioarena2, precioarena3];
    arregloArenas.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      imagenarena = imagenesPetstore.arenas[0];
      this.renderer2.addClass(precioarena2, 'clase-quitar');
      this.renderer2.addClass(precioarena3, 'clase-quitar');
    } else if(arg == 2) {
      imagenarena = imagenesPetstore.arenas[1];
      this.renderer2.addClass(precioarena1, 'clase-quitar');
      this.renderer2.addClass(precioarena3, 'clase-quitar');
    } else {
      imagenarena = imagenesPetstore.arenas[2];
      this.renderer2.addClass(precioarena1, 'clase-quitar');
      this.renderer2.addClass(precioarena2, 'clase-quitar');
    }

    this.renderer2.setAttribute(arena, 'src', imagenarena);

  }

}
