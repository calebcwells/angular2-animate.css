import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceInDown } from '../../animations/bounce-in-down.animation';

@Component({
  selector: 'ng2animate-bounce-in-down',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-in-down.component.html',
  animations: [ bounceInDown ]
})
export class BounceInDownComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
