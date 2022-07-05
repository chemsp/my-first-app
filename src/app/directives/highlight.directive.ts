import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

//  EleRef: ElementRef;


  constructor(   public EleRef : ElementRef,  private myrender : Renderer2 ) {
    

  //this.EleRef = EleRef;



   //  this.EleRef.nativeElement.style.color = 'blue';
   this.myrender.setStyle(this.EleRef.nativeElement, 'color', 'brown')

  

   }

@HostListener('mouseenter')
   mouseenter(){
    this.EleRef.nativeElement.style.color = 'green';
    
    this.EleRef.nativeElement.style.backgroundColor = 'Yellow';

   }

   @HostListener('mouseleave')
   mouseleave(){
    this.EleRef.nativeElement.style.color = 'blue';
    this.EleRef.nativeElement.style.backgroundColor = 'white';
  }

}
