import {Directive, ElementRef , OnInit, Renderer2, HostListener, Input, HostBinding} from "@angular/core"

@Directive ({
    selector : '[appBetterHighLight]'
})

export class BetterHighLightDirective implements OnInit {
    @Input() defaultColor : string = 'transparent'
    @Input() highlightColor : string = 'yellow'
    @HostBinding('style.backgroundColor') backgroundColor : string 

    constructor (private elementRef : ElementRef, private render : Renderer2)  {}
    ngOnInit(){
       // this.render.setStyle (this.elementRef.nativeElement , 'background-color', 'blue')
       this.backgroundColor = this.defaultColor 
    }
    //Add hieu ung mouse on de thay doi backgroud
    @HostListener('mouseenter')  mouseover( eventData : Event) {
       // this.render.setStyle (this.elementRef.nativeElement , 'background-color', 'blue')
        this.backgroundColor = this.highlightColor 
    }
    @HostListener('mouseleave')  mouseleave( eventData : Event) {
      //  this.render.setStyle (this.elementRef.nativeElement , 'background-color', 'transparent')
        this.backgroundColor = this.defaultColor 
    }
}   