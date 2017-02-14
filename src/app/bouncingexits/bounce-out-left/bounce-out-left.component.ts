import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceOutLeft } from '../../animations/bounce-out-left.animation';

@Component({
  selector: 'ng2animate-bounce-out-left',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-out-left.component.html',
  animations: [ bounceOutLeft ]
})
export class BounceOutLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
