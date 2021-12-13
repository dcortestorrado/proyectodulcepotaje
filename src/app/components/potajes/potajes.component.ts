import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { imagenesPotajes } from 'src/assets/directorioimagenes';

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

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {

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

    const arregloUntables = [this.img_untable?.nativeElement];

    const otros1 = this.img_otros1?.nativeElement;
    const otros2 = this.img_otros2?.nativeElement;
    const chocodiscos = this.img_chocodiscos?.nativeElement;

    const arregloOtros = [otros1, otros2, chocodiscos];

    console.log(imagenesPotajes.galletas[0]);
    
    this.renderer2.setAttribute(avenanas, 'src', imagenesPotajes.galletas[0]);
    
  }

  scrollToElement(elemento: any){
    // console.log(elemento);
    elemento.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"

    }) //Salta a alias, asignados en el HTML
  }

}
