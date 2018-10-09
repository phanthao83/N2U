import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName : string = ""
  allowResetUserName : boolean = false
  allowAddServer : boolean = false 
  serverName : string =  "11"
  counnt : number = 1 
  serverCreated = false
  servers = ["Test1 ", "Test2 "]

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true  ; 
      this.counnt  ++
    } , 4000)

  }

  ngOnInit() {
    
  }
  onCreateServer()
  {
    this.counnt = this.counnt + 1000
    this.serverCreated = true
    this.servers.push(this.serverName)
  }
  onServerChange( event : Event  )
  {
    this.serverName = ( <HTMLInputElement> event.target).value
    

  }
  onUserNameChange( event : Event)
  {
    this.userName =( <HTMLInputElement> event.target).value
    
    this.allowResetUserName = (this.userName.length > 0 ) ? true : false 
    
  }
  onResetUserName(event : any)
  {
    this.userName = ""

  }
}
