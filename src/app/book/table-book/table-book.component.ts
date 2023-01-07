import { Component, Input, OnInit } from '@angular/core';
import { bookLibrary } from 'src/app/models/booksLib';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css']
})
export class TableBookComponent implements OnInit {
  @Input("bklst") bookList!:Array<bookLibrary>
  constructor() { }

  
  ngOnInit(): void {
  }

}
