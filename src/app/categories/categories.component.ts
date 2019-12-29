import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories : any;

  constructor() { }

  ngOnInit() {
    this.categories=require('src/categories.json');
    console.log("data",JSON.stringify(this.categories));
  }

  viewModules(){
    console.log("clicked image");
  }
  
}
