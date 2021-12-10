import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potajes',
  templateUrl: './potajes.component.html',
  styleUrls: ['./potajes.component.css']
})
export class PotajesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
