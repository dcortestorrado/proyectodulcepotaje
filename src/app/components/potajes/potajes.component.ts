import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { imagenesPotajes } from 'src/assets/directorioimagenes';

import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-potajes',
  templateUrl: './potajes.component.html',
  styleUrls: ['./potajes.component.css']
})
export class PotajesComponent implements OnInit {
  @ViewChild('imagenavenanas') img_avenanas?: ElementRef;
  @ViewChild('imagenbanani') img_banani?: ElementRef;
  @ViewChild('imagenbrowneta') img_browneta?: ElementRef;
  @ViewChild('imagencobana') img_cobana?: ElementRef;
  @ViewChild('imagenmiel') img_miel?: ElementRef;
  @ViewChild('imagenvainilla') img_vainilla?: ElementRef;

  @ViewChild('imagenavenanos') img_avenanos?: ElementRef;
  @ViewChild('imagencacao') img_cacao?: ElementRef;
  @ViewChild('imagenmaniel') img_maniel?: ElementRef;
  
  @ViewChild('imagengranola') img_granola?: ElementRef;
  @ViewChild('imagenchocobarra') img_chocobarra?: ElementRef;
  @ViewChild('imagencompleta') img_completa?: ElementRef;
  @ViewChild('imagentriplea') img_triplea?: ElementRef;

  @ViewChild('imagenuntable') img_untable?: ElementRef; 

  @ViewChild('imagenotros1') img_otros1?: ElementRef;  
  @ViewChild('imagenotros2') img_otros2?: ElementRef;  
  @ViewChild('imagenchocodiscos') img_chocodiscos?: ElementRef;  

  //Precios (elemento)
  //Galletas
  @ViewChild('precioavenanas1') precio_avenanas1?:ElementRef;
  @ViewChild('precioavenanas2') precio_avenanas2?:ElementRef;
  @ViewChild('preciobanani1') precio_banani1?:ElementRef;
  @ViewChild('preciobanani2') precio_banani2?:ElementRef;
  @ViewChild('preciobrowneta1') precio_browneta1?:ElementRef;
  @ViewChild('preciobrowneta2') precio_browneta2?:ElementRef;
  @ViewChild('preciocobana1') precio_cobana1?:ElementRef;
  @ViewChild('preciocobana2') precio_cobana2?:ElementRef;
  @ViewChild('preciomiel1') precio_miel1?:ElementRef;
  @ViewChild('preciomiel2') precio_miel2?:ElementRef;
  @ViewChild('preciovainilla1') precio_vainilla1?:ElementRef;
  @ViewChild('preciovainilla2') precio_vainilla2?:ElementRef;

   //Bocaditos
  @ViewChild('precioavenanos') precio_avenanos?:ElementRef;
  @ViewChild('preciocacao') precio_cacao?:ElementRef;
  @ViewChild('preciomaniel') precio_maniel?:ElementRef;

  // // HTML
  @ViewChild('avenanos') h_avenanos?:ElementRef;
  @ViewChild('cacao') h_cacao?:ElementRef;
  @ViewChild('maniel') h_maniel?:ElementRef;

  @ViewChild('pavenanos') p_avenanos?:ElementRef;
  @ViewChild('pcacao') p_cacao?:ElementRef;
  @ViewChild('pmaniel') p_maniel?:ElementRef;

  //Granolas
  @ViewChild('preciogranola1') precio_granola1?:ElementRef;
  @ViewChild('preciogranola2') precio_granola2?:ElementRef;
  @ViewChild('preciochocobarra') precio_chocobarra?:ElementRef;
  @ViewChild('preciocompleta') precio_completa?:ElementRef;
  @ViewChild('preciotriplea') precio_triplea?:ElementRef;

  //Untables
  @ViewChild('preciountables1') precio_untables1?:ElementRef;
  @ViewChild('preciountables2') precio_untables2?:ElementRef;

  //Otros
  @ViewChild('preciootros1') precio_otros1?:ElementRef;
  @ViewChild('preciootros2') precio_otros2?:ElementRef;
  @ViewChild('preciochocodiscos1') precio_chocodiscos1?:ElementRef;
  @ViewChild('preciochocodiscos2') precio_chocodiscos2?:ElementRef;


  constructor(private renderer2: Renderer2, private _inventarioService: InventarioService) { }

  listaInventario: Inventario[] = [];
  data_p: any; 

  ngOnInit(): void {
  setTimeout(() =>{
    const avenanas = this.img_avenanas?.nativeElement;
    const banani = this.img_banani?.nativeElement;
    const browneta = this.img_browneta?.nativeElement;
    const cobana = this.img_cobana?.nativeElement;
    const miel = this.img_miel?.nativeElement;
    const vainilla = this.img_vainilla?.nativeElement;

    const arregloGalletas = [avenanas, banani, browneta, cobana, miel, vainilla];

    const avenanos = this.img_avenanos?.nativeElement;
    const cacao = this.img_cacao?.nativeElement;
    const maniel = this.img_maniel?.nativeElement;

    const arregloBocaditos = [avenanos, cacao, maniel];

    const granola = this.img_granola?.nativeElement;
    const chocobarra = this.img_chocobarra?.nativeElement;
    const completa = this.img_completa?.nativeElement;
    const triplea = this.img_triplea?.nativeElement;

    const arregloGranolas = [granola, chocobarra, completa, triplea];

    const mantequilla = this.img_untable?.nativeElement
    const arregloUntables = [mantequilla];

    const otros1 = this.img_otros1?.nativeElement;
    const otros2 = this.img_otros2?.nativeElement;
    const chocodiscos = this.img_chocodiscos?.nativeElement;

    const arregloOtros = [otros1, otros2, chocodiscos];

    // console.log(imagenesPotajes.galletas[0]);

    arregloGalletas.forEach((galleta, i) => {
      this.renderer2.setAttribute(galleta, 'src', imagenesPotajes.galletas[i]);
    });

    arregloBocaditos.forEach((bocadito, i) => {
      this.renderer2.setAttribute(bocadito, 'src', imagenesPotajes.bocaditos[i]);
    });

    arregloGranolas.forEach((granola, i) => {
      this.renderer2.setAttribute(granola, 'src', imagenesPotajes.granolas[i]);
    });

    arregloUntables.forEach((untable, i) => {
      this.renderer2.setAttribute(untable, 'src', imagenesPotajes.untables[i]);
    });

    arregloOtros.forEach((otro, i) => {
      this.renderer2.setAttribute(otro, 'src', imagenesPotajes.otros[i]);
    });

  }, 1000)
  
      
  }
    
  obtenerInventario(){
    this._inventarioService.getInventario().subscribe(data =>{
      console.log(data);
      this.listaInventario = data;
      this.data_p = this.listaInventario;
    }, error => {
      console.log(error);
    });
  }
  //Presentaciones galletas
  presentacionAvenanas(arg: number){
    let precioavenanas1 = this.precio_avenanas1?.nativeElement;
    let precioavenanas2 = this.precio_avenanas2?.nativeElement;

    let arregloAvenanas = [precioavenanas1, precioavenanas2];
    arregloAvenanas.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(precioavenanas2, 'clase-quitar');
    } else {
      this.renderer2.addClass(precioavenanas1, 'clase-quitar');
    }
  }

  presentacionBanani(arg: number){
    let preciobanani1 = this.precio_banani1?.nativeElement;
    let preciobanani2 = this.precio_banani2?.nativeElement;

    let arregloBanani = [preciobanani1, preciobanani2];
    arregloBanani.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciobanani2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciobanani1, 'clase-quitar');
    }
  }

  presentacionBrowneta(arg: number){
    let preciobrowneta1 = this.precio_browneta1?.nativeElement;
    let preciobrowneta2 = this.precio_browneta2?.nativeElement;

    let arregloBrowneta = [preciobrowneta1, preciobrowneta2];
    arregloBrowneta.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciobrowneta2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciobrowneta1, 'clase-quitar');
    }
  }

  presentacionCobana(arg: number){
    let preciocobana1 = this.precio_cobana1?.nativeElement;
    let preciocobana2 = this.precio_cobana2?.nativeElement;

    let arregloCobana = [preciocobana1, preciocobana2];
    arregloCobana.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciocobana2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciocobana1, 'clase-quitar');
    }
  }

  presentacionMiel(arg: number){
    let preciomiel1 = this.precio_miel1?.nativeElement;
    let preciomiel2 = this.precio_miel2?.nativeElement;

    let arregloMiel = [preciomiel1, preciomiel2];
    arregloMiel.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciomiel2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciomiel1, 'clase-quitar');
    }
  }

  presentacionVainilla(arg: number){
    let preciovainilla1 = this.precio_vainilla1?.nativeElement;
    let preciovainilla2 = this.precio_vainilla2?.nativeElement;

    let arregloVainilla = [preciovainilla1, preciovainilla2];
    arregloVainilla.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciovainilla2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciovainilla1, 'clase-quitar');
    }
  }
  //Función tienda
  
  //Presentaciones granolas
  presentacionGranola(arg: number){
    let preciogranola1 = this.precio_granola1?.nativeElement;
    let preciogranola2 = this.precio_granola2?.nativeElement;

    let arregloGranola = [preciogranola1, preciogranola2];
    arregloGranola.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciogranola2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciogranola1, 'clase-quitar');
    }
  }
  //Presentaciones untables
  presentacionMantequilla(arg: number){
    const mantequilla = this.img_untable?.nativeElement;
    let imagenmantequilla = "";
    let preciountables1 = this.precio_untables1?.nativeElement;
    let preciountables2 = this.precio_untables2?.nativeElement;
    
    let arregloUntables = [preciountables1, preciountables2];
    arregloUntables.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      imagenmantequilla = imagenesPotajes.untables[0];
      this.renderer2.addClass(preciountables2, 'clase-quitar');
    } else {
      imagenmantequilla = imagenesPotajes.untables[1];
      this.renderer2.addClass(preciountables1, 'clase-quitar')
    }

    this.renderer2.setAttribute(mantequilla, 'src', imagenmantequilla);   
  }  

  //Presentaciones otros

  presentacionOtros(arg: number){
    let preciochocodiscos1 = this.precio_chocodiscos1?.nativeElement;
    let preciochocodiscos2 = this.precio_chocodiscos2?.nativeElement;

    let arregloChocodiscos = [preciochocodiscos1, preciochocodiscos2];
    arregloChocodiscos.forEach(precio => {
      this.renderer2.removeClass(precio, 'clase-quitar');
    });

    if (arg == 1){
      this.renderer2.addClass(preciochocodiscos2, 'clase-quitar');
    } else {
      this.renderer2.addClass(preciochocodiscos1, 'clase-quitar');
    }
  }

  scrollToElement(elemento: any){
    // console.log(elemento);
    elemento.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"

    }) //Salta a alias, asignados en el HTML
  }

  bocaditosStorage(arg: number){

    let pavenanos = this.p_avenanos?.nativeElement.textContent;
    let pcacao = this.p_cacao?.nativeElement.textContent;
    let pmaniel = this.p_maniel?.nativeElement.textContent;

    let precioavenanos = parseInt(this.precio_avenanos?.nativeElement.textContent);
    let preciocacao = parseInt(this.precio_cacao?.nativeElement.textContent);
    let preciomaniel = parseInt(this.precio_maniel?.nativeElement.textContent);


    class Carrito {
      articulo: any;
      info: any;
      
      constructor(articulo: string, info: []){
        this.articulo = articulo;
        this.info = info;
      }
    }

    let cantidadAvenanos = 0;
    let cantidadCacao = 0;
    let cantidadManiel = 0;

    let arregloCarritos: any[] = [];

    let comprasBocaditos = new Carrito('', []);
    // console.log(comprasBocaditos);

    //Si no hay nada en el carrito aún
    if (!localStorage.getItem('bocaditos')){
      if (arg == 1 || arg == 3 || arg == 5){
        Swal.fire({
          title: 'No tienes artículos agregados',
          icon: 'warning',
          showConfirmButton: false,
          timer: 1000})
          return;
      } if (arg == 2){
        cantidadAvenanos++;
        comprasBocaditos.articulo = 'Avenanos';
        comprasBocaditos.info.push({'presentacion': pavenanos, 'precio': precioavenanos, 'cantidad': cantidadAvenanos});
      } else if (arg == 4){
        cantidadCacao++;
        comprasBocaditos.articulo = 'Cacao';
        comprasBocaditos.info.push({'presentacion': pcacao, 'precio': preciocacao, 'cantidad': cantidadCacao});
      } else if (arg == 6){
        cantidadManiel++;
        comprasBocaditos.articulo = 'Maniel';
        comprasBocaditos.info.push({'presentacion': pmaniel, 'precio': preciomaniel, 'cantidad': cantidadManiel});
      }
      arregloCarritos.push(comprasBocaditos)
      localStorage.setItem('bocaditos', JSON.stringify(arregloCarritos));
      Swal.fire({
        title: 'Artículo agregado',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500
      })
      // console.log(arregloCarritos);
    } 
    // console.log(localStorage.getItem('bocaditos'));

    // Si hay algo antes
    else {
      let storage: any = localStorage.getItem('bocaditos');
      let compras = JSON.parse(storage);
      localStorage.removeItem('bocaditos');
      // console.log(compras);
        switch(arg){
        case 1:
        for (const entrada of compras){
          console.log(entrada);
          if (entrada.articulo == 'Avenanos'){
            for (const cantidad of entrada.info){
              if(cantidad.cantidad > 0){
                cantidad.cantidad--;
                console.log(cantidad.cantidad);
                Swal.fire({
                title: 'Borraste un artículo',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000});
              } else {
                Swal.fire({
                title: 'No tienes agregado este artículo',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000});
              }
            }
            localStorage.setItem('bocaditos', JSON.stringify(compras));
          }
        }
        break;
        case 3:
        for (const entrada of compras){
          if (entrada.articulo == 'Cacao'){
            for (const cantidad of entrada.info){
              if(cantidad.cantidad > 0){
                cantidad.cantidad--;
                Swal.fire({
                title: 'Borraste un artículo',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000});
              } else {
                Swal.fire({
                title: 'No tienes agregado este artículo',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000});
              }
              localStorage.setItem('bocaditos', JSON.stringify(compras));
            }
          }
        }
        break;
        case 5:
        for (const entrada of compras){
          if (entrada.articulo == 'Maniel'){
            for (const cantidad of entrada.info){
              if(cantidad.cantidad > 0){
                cantidad.cantidad--;
                Swal.fire({
                title: 'Borraste un artículo',
                icon: 'success',
                showConfirmButton: false,
                timer: 2500});
              } else {
                Swal.fire({
                title: 'No tienes agregado este artículo',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2500});
              }
              localStorage.setItem('bocaditos', JSON.stringify(compras));
            }
          }
        }
        break;

        case 2:
        for (const entrada of compras){
          if (entrada.articulo == 'Avenanos'){
            for (const cantidad of entrada.info){
              cantidad.cantidad++;
              Swal.fire({
                title: 'Artículo agregado',
                icon: 'success',
                showConfirmButton: false,
                timer: 2500}) 
            }
            localStorage.setItem('bocaditos', JSON.stringify(compras));
            return;
          }                           
        }
        compras.push({'articulo': 'Avenanos', 'info': [{'presentacion': pavenanos, 'precio': precioavenanos, 'cantidad': 1 }]});
        Swal.fire({
          title: 'Artículo agregado',
          icon: 'success',
          showConfirmButton: false,
          timer: 2500})
        localStorage.setItem('bocaditos', JSON.stringify(compras));
        break;

        case 4:
          for (const entrada of compras){
            if (entrada.articulo == 'Cacao'){
              for (const cantidad of entrada.info){
                cantidad.cantidad++;
                Swal.fire({
                  title: 'Artículo agregado',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 2500}) 
              }
              localStorage.setItem('bocaditos', JSON.stringify(compras));
              return;
            }
          }
          compras.push({'articulo': 'Cacao', 'info': [{'presentacion': pcacao, 'precio': preciocacao, 'cantidad': 1 }]});
          Swal.fire({
            title: 'Artículo agregado',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500})
          localStorage.setItem('bocaditos', JSON.stringify(compras));
          break;

          case 6:
            for (const entrada of compras){
              if (entrada.articulo == 'Maniel'){
                for (const cantidad of entrada.info){
                  cantidad.cantidad++;
                  Swal.fire({
                    title: 'Artículo agregado',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2500}) 
                }
                localStorage.setItem('bocaditos', JSON.stringify(compras));
                return;
              }
            }
            compras.push({'articulo': 'Maniel', 'info': [{'presentacion': pmaniel, 'precio': preciomaniel, 'cantidad': 1 }]});
            Swal.fire({
              title: 'Artículo agregado',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500})
            localStorage.setItem('bocaditos', JSON.stringify(compras));
            break;
      }
    }      
  } 
}

