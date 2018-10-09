import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './alert/success/success-alert.component';
import { WarningAlertComponent } from './alert/warning/warning-alert.component';
import { UserComponent } from './user/user.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './gamecontrol/odd/odd.component';
import { EventComponent } from './gamecontrol/event/event.component';
import {BasicHighLightDirective} from './basic-highlight/basic-highlight.directive';
import {BetterHighLightDirective} from './better-highlight/better-highlight.directive'; 
import {DropDownDirective} from './dropdown/dropdown.directive'; 
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserComponent,
    GamecontrolComponent,
    OddComponent,
    EventComponent, 
    BasicHighLightDirective, 
    BetterHighLightDirective ,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
