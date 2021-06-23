import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchableListComponent } from './searchable-list/searchable-list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchBarComponent,
    SearchableListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
