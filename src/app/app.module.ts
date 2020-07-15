import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenulistComponent } from './menulist/menulist.component';
import  { createCustomElement } from '@angular/elements';
import {Location,APP_BASE_HREF} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents :  [
    MenulistComponent
 ]
})
export class AppModule { 
  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(MenulistComponent, {injector : this.injector});
  customElements.define('x-menu',el);
  }
}
