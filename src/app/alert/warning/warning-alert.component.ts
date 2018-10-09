import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template : `<h3> Warning Message</h3>`,
  styles: [`h3 {font-size : 10px ; color : blue ; }`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
