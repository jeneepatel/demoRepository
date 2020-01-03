import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories : any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.categories=require('src/categories.json');
    console.log("data",JSON.stringify(this.categories));
  }

  viewModules(category:string){
    console.log("clicked image",category);
    //this.router.navigate(['modulesList'], { state: { hello: 'hello' } });
    this.router.navigate(['/modulesList', category]);
  }
  


}

