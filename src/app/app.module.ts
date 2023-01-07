import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SigninComponent } from './signin/signin.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { TableBookComponent } from './book/table-book/table-book.component';
import { RegisterComponent } from './register/register.component';
import { AddDataComponent } from './register/add-data/add-data.component';
import { TabledataComponent } from './register/tabledata/tabledata.component';
import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './author/addauthor/addauthor.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { empty } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
import { AddinfoComponent } from './employee/addinfo/addinfo.component';
import { TableComponent } from './employee/tableemp/table.component';
import { LoginComponent } from './employee/login/login.component';
import { CommentComponent } from './employee/comment/comment.component';
import { TablecommentComponent } from './employee/comment/tablecomment/tablecomment.component';
import { Router } from 'express';
import { MainComponent } from './employee/main/main.component';

// const route:Routes=[
// {path:'adddata',component:AddauthorComponent},
// {path:'tabledata',component:AuthorComponent},
// ]

const route:Routes=[
  {path:"login",component: LoginComponent},
  {path:"tableemp",component:TableComponent},
  {path:"add",component:AddinfoComponent},
  {path:"comment",component:CommentComponent},
  {path:"main",component:MainComponent},
  {path:"commentT",component:TablecommentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    BookComponent,
    AddBookComponent,
    TableBookComponent,
    RegisterComponent,
    AddDataComponent,
    TabledataComponent,
    AuthorComponent,
    AddauthorComponent,
    EmployeeComponent,
    AddinfoComponent,
    TableComponent,
    LoginComponent,
    CommentComponent,
    TablecommentComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// RouterModule.forRoot(route)