import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceInRight } from '../../animations/bounce-in-right.animation';

@Component({
  selector: 'ng2animate-bounce-in-right',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-in-right.component.html',
  animations: [ bounceInRight ]
})
export class BounceInRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
