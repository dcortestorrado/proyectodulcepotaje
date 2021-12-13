import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('home') nav_home?: ElementRef;
  @ViewChild('potajes') nav_potajes?: ElementRef;
  @ViewChild('acercade') nav_acercade?: ElementRef;
  @ViewChild('petstore') nav_petstore?: ElementRef;
  @ViewChild('contactanos') nav_contactanos?: ElementRef;

  constructor(private renderer2: Renderer2) { 

  }

  ngOnInit(): void {
  }

  cambio(ul_pagina: string){
    let nav_actual = "";
    const ul_home = this.nav_home?.nativeElement; //nativeElement -> Elemento del HTML
    const ul_potajes = this.nav_potajes?.nativeElement; 
    const ul_acercade = this.nav_acercade?.nativeElement;
    const ul_petstore = this.nav_petstore?.nativeElement;
    const ul_contactanos = this.nav_contactanos?.nativeElement;
    let arregloElementos = [ul_home, ul_potajes, ul_acercade, ul_petstore, ul_contactanos];
    
    arregloElementos.forEach(elemento =>{
      this.renderer2.removeClass(elemento, "active");
    })

    switch(ul_pagina){
      case "home":
        this.renderer2.addClass(ul_home, "active");
        break;
      case "potajes":
        this.renderer2.addClass(ul_potajes, "active");
        break;
      case "acercade":
        this.renderer2.addClass(ul_acercade, "active");
        break;
      case "petstore":
        this.renderer2.addClass(ul_petstore, "active");
        break;
      case "contactanos":
        this.renderer2.addClass(ul_contactanos, "active");
        break;
    }
  }
}
