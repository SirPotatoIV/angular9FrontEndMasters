// There are two module systems. The Language level (ES6) and Angular modules
// These are Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// These are ES6 (language) Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// add by me, not by Angular CLI
import { ItemsComponent } from './items/items.component';
import { MaterialModule } from './material.module';
import { FirstComponentComponent } from './first-component/first-component.component';

// This is our top level, main Angular module.
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  // sets up where to start to build (compile) the site
  bootstrap: [AppComponent]
})
export class AppModule { }
