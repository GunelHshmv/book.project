import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { TableBookComponent } from './book/table-book/table-book.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    TableBookComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
