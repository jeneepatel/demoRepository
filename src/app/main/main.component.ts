import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentJustify = 'start';

  currentOrientation = 'horizontal';
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

}
