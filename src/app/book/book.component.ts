import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { bookLibrary } from '../models/booksLib';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

bookList:Array<bookLibrary>=[{
  booknamem:"rose",
  authorm:"Gunel",
  countm:'89',
  pricem:"7",
  tittlem:"iynn"
},

{
  booknamem:"rose",
  authorm:"Gunel",
  countm:'8',
  pricem:"98",
  tittlem:"iynn"
}]
addBook(data:bookLibrary){

    this.bookList.push(data)
  }
 

}
