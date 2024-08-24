import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?:ElementRef<HTMLElement>;
  private _color:string = 'red';

  @Input() set color(value:string){
    this._color = value;
    this.setStyle();
  }

  constructor( private elemento: ElementRef<HTMLElement> ) {
    // console.log('Contructor de la directiva');
    // console.log(elemento);
    this.htmlElement = elemento;
  }
  ngOnInit(): void {
    // console.log('Directiva NgOnInit');
    this.setStyle();
  }


  public setStyle():void{
    if (!this.htmlElement) {
      return
    }
    this.htmlElement!.nativeElement.style.color = this._color;
  }

}
