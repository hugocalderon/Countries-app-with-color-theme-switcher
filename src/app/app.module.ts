import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgBootstrapDarkmodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
