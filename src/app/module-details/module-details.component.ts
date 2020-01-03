import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {

  module:string;
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let moduleName = this.activatedRoute.snapshot.paramMap.get('moduleName');
    this.module=moduleName;
    console.log("moduleName ",moduleName);
  }

  sendDetails(moduleName : string , gitRepository: string){

    console.log(gitRepository);
    //var test="{\"name\":+"\""+moduleName+"\",\"giturl\": "+gitRepository+"}";
    var test2="{\"modulename\":\""+moduleName+"\",\"giturl\":\""+gitRepository+"\"}";
    this.http.post('http://192.168.0.106:3000',test2).subscribe((data)=>
    {                                         
      return data;
    })
  }
}
