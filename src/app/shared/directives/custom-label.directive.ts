import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?:ElementRef<HTMLElement>;
  private _color:string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value:string){
    this._color = value;
    this.setStyle();
  }
  @Input() set errors(value:ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage()
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


  private setStyle():void{
    if (!this.htmlElement) {
      return
    }
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  private setErrorMessage = (): void => {
    if (!this.htmlElement) {
      return
    }
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = ''
      return
    }

    const errors = Object.keys(this._errors);
    console.log(errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido'
      return
    }


    if (errors.includes('minlength')) {
      this.htmlElement.nativeElement.innerText = `Minimo ${this._errors['minlength']['requiredLength']} caracteres`
      return
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = `Tiene que ser un correo electronico`
      return
    }

  }

}
