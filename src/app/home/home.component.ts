import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data : any;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.data=require('src/products.json');
    console.log("data",JSON.stringify(this.data));
  }

  
  sendDetails(moduleName :string,gitRepository:string){

    console.log(gitRepository);
    //var test="{\"name\":+"\""+moduleName+"\",\"giturl\": "+gitRepository+"}";
    var test2="{\"modulename\":\""+moduleName+"\",\"giturl\":\""+gitRepository+"\"}";
    this.http.post('http://192.168.0.106:3000',test2).subscribe((data)=>
    {                                         
      return data;
    })
  }
}
