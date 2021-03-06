import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounce } from '../../animations/bounce.animation';

@Component({
  selector: 'ng2animate-bounce',
  host: { 'class': 'boxes' },
  templateUrl: './bounce.component.html',
  animations: [ bounce ]
})
export class BounceComponent implements OnInit {
  boxList: any[] = [];

  constructor() {}

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
