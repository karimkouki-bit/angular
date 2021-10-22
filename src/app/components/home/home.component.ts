import { Component, OnInit } from '@angular/core';
import {good} from 'src/app/interface/goods.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Array<good> = [
    {name: 'apple', price: 1, photoUrl: 'assets/apple.jpg'},
    {name: 'banana', price: 2, photoUrl: 'assets/banana.jpg'},
    {name: 'mango', price: 3, photoUrl: 'assets/mango.jpg'},
    {name: 'strawberie', price: 4, photoUrl: 'assets/strawberry.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }


  addToCart(index:any) {
    console.log('added', this.goods[index])
  }


}
