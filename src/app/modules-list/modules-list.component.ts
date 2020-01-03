import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.css']
})
export class ModulesListComponent implements OnInit {

  categoriesJson: any;
  modulesList: any;

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    console.log(categoryName);
    this.categoriesJson = require('src/categories.json');
    this.modulesList = this.categoriesJson.filter(a => a.category == categoryName);

    console.log(" Filtering :: ", this.modulesList);
  }

  getDetails(module: string) {
    console.log("Details of " + module);
    this.router.navigate(['/moduleDetails', module]);
  }
}


