import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [`
      h3 {
        color : black;
        font-size : 13px;  
      }
      .online {
        font-size : 19px; 
        color : white;  
      }
           `]
})
export class ServerComponent implements OnInit {
  serverID : number  = 10 
  serverStatus : string = 'offline'
  allowAddServer : boolean = false 
  showDetail : boolean = false 
  clicks = [] 
  clickcount  : number = 0; 
  constructor() { 
    setTimeout(() => {
      this.allowAddServer = true 
    } , 2000)


  }
 
  ngOnInit() {
    this.serverID = Math.round( Math.random () * 1000 )
    this.serverStatus = (Math.random() > 0.5)  ?  "online"  : "offline"
  }

  getStatusCode ()
  {
    return '001'

  }
  
  getColor()
  {
    return (this.serverStatus == "online") ? "green" : "red"

  }

  onServerDetailClick(event : Event)
  {
      var text_button : string
      text_button = (<HTMLButtonElement> event.target).innerText
      if ( text_button === "More Detail" )
      { (<HTMLButtonElement> event.target).innerText = "Hide Info" 
        this.showDetail = true 
      }
      else 
      {
        (<HTMLButtonElement> event.target).innerText = "More Detail"
        this.showDetail = false
      }
      this.clickcount ++ 
      this.clicks.push( this.clickcount + "_onDetailClick")
      console.log(this.clicks) 

  }
  getLogColor( click : string)
  {
    return  ( click > "4_onDetailClick" ) ? "blue" : "white"  
  }
}
