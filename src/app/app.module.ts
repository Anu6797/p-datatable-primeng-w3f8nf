import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { DataTableModule, MultiSelectModule, DropdownModule, SliderModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CarService } from './app.service';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DataTableModule, HttpClientModule, BrowserAnimationsModule, MultiSelectModule, DropdownModule, SliderModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers:    [ CarService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
