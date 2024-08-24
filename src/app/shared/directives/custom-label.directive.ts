import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?:ElementRef<HTMLElement>;

  constructor( private elemento: ElementRef<HTMLElement> ) {
    console.log('Contructor de la directiva');
    console.log(elemento);

    this.htmlElement = elemento;

  }
  ngOnInit(): void {
    console.log('Directiva NgOnInit');
  }

}
