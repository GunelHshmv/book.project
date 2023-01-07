import { Injectable } from '@angular/core';
import { empList } from '../models/booksLib';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }

  employeeArr:Array<empList>=[
    {names:'Gunel',
    surnames:'Hashim',
    positions:'Web-Developer',
    emails:'hasimova9@gmail.com',
    salarys:'2000',
    phones:'8444084',
    ages:'20'}
   ]

   callFunc(){
    return this.employeeArr
   }
}
