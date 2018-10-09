import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() sendNumber : EventEmitter <number > = new  EventEmitter () 
 // @Output()  saveIngredient = new  EventEmitter<{ ingre : Ingredient}> ()
 
  @ViewChild('header') header : ElementRef 
  index : number = 0; 
  alert : any 
  constructor() { }
  
  ngOnInit() {
   
  }
  onSubmit (event : Event)
  {
   // console.log(this.sendNumber)
   
    this.header.nativeElement.innerText = "ABC"
    if ((<HTMLButtonElement> event.target).innerText === "Stop")
    {
      (<HTMLButtonElement> event.target).innerText = "Start"
      clearInterval(this.alert)
    }else
    {
      (<HTMLButtonElement> event.target).innerText = "Stop" 
      this.alert = setInterval(()=> this.myTimer() , 1000)
    }
   
  }
   myTimer() {
    this.index = Math.round( Math.random() * 1000 )
    this.sendNumber.emit(this.index)
   // console.log(this.sendNumber)
    // this.sendNumber.emit({randomNo: this.index})
   // this.header.nativeElement.innerText  = t;

   //this.saveIngredient.emit({ingre : this.ingredient}) 
}
}
