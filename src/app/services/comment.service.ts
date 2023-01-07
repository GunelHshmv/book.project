import { Injectable } from '@angular/core';
import { comment } from '../models/booksLib';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  commentSerArr:Array<comment>=[]
  call(){
    return this.commentSerArr
  }
}
