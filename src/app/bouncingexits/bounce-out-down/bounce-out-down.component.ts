import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceOutDown } from '../../animations/bounce-out-down.animation';

@Component({
  selector: 'ng2animate-bounce-out-down',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-out-down.component.html',
  animations: [ bounceOutDown ]
})
export class BounceOutDownComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
