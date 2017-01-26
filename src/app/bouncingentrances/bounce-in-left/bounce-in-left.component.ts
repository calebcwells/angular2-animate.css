import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceInLeft } from '../../animations/bounce-in-left.animation';

@Component({
  selector: 'ng2animate-bounce-in-left',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-in-left.component.html',
  animations: [ bounceInLeft ]
})
export class BounceInLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
