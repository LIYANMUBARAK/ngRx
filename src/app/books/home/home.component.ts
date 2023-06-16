import { Component,OnInit } from '@angular/core';
import { selectBooks } from '../store/books.selector';
import { select,Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private store:Store){}
  books$ = this.store.pipe(select(selectBooks))
  ngOnInit(): void {
    
  }
}
