import { Component, EventEmitter,  Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { count } from 'rxjs';
import { bookLibrary } from 'src/app/models/booksLib';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input('bklist') bklist!:Array<bookLibrary>
  constructor() { }

  @Output("addbookstable") bookdata=new EventEmitter<bookLibrary>();

booksname!:any;
author!:string;
pageCount!:any;
price!:any;
title!:string;
submit:boolean=false

check(){
  if(this.bklist.length>=6){
 return true
  }else{
   return false
  }
}
  addNewBook(form:NgForm){
    console.log(form)
   this.submit=false
    if(form.valid){
        this.bookdata.emit({
          booknamem:form.value.booksname,
          authorm:form.value.author,
          countm:form.value.pageCount,
          pricem:form.value.price,
          tittlem:form.value.title
      })
    }
  
  }
  ngOnInit(): void {

     }


}


