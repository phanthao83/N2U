import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <h3>  Successfull Alert  </h3>
  `, 
  styles:  [` h3 { color : yellow ; font-size : 15px; }
             `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
