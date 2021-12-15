import { Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { imagenesPetstore } from 'src/assets/directorioimagenes';

@Component({
  selector: 'app-petstore',
  templateUrl: './petstore.component.html',
  styleUrls: ['./petstore.component.css']
})
export class PetstoreComponent implements OnInit {

  @ViewChild('imagenbolsa') img_bolsa?: ElementRef;
  @ViewChild('imagenarena') img_arena?: ElementRef;


  constructor(private renderer2: Renderer2) {

  }

  ngOnInit(): void {
  setTimeout(() =>{
    const bolsa = this.img_bolsa?.nativeElement;
    console.log(bolsa);
    const arena = this.img_arena?.nativeElement;
    let imagenbolsa = imagenesPetstore.bolsas[0];
    console.log(imagenbolsa);
    let imagenarena = imagenesPetstore.arenas[0];
    this.renderer2.setAttribute(bolsa, 'src', imagenbolsa);
    this.renderer2.setAttribute(arena, 'src', imagenarena);
  }, 500);
}
  
  presentacionBolsa(arg: number){
    const bolsa = this.img_bolsa?.nativeElement;
    let imagenbolsa = "";

    if (arg == 1){
      imagenbolsa = imagenesPetstore.bolsas[0];
    } else {
      imagenbolsa = imagenesPetstore.bolsas[1];
    }

    this.renderer2.setAttribute(bolsa, 'src', imagenbolsa);
  }

  presentacionArena(arg: number){
    const arena = this.img_arena?.nativeElement;
    let imagenarena = "";

    if (arg == 1){
      imagenarena = imagenesPetstore.arenas[0];
    } else if(arg == 2) {
      imagenarena = imagenesPetstore.arenas[1];
    } else {
      imagenarena = imagenesPetstore.arenas[2];
    }

    this.renderer2.setAttribute(arena, 'src', imagenarena);

  }
}
