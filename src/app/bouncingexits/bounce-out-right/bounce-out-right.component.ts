import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceOutRight } from '../../animations/bounce-out-right.animation';

@Component({
  selector: 'ng2animate-bounce-out-right',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-out-right.component.html',
  animations: [ bounceOutRight ]
})
export class BounceOutRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
