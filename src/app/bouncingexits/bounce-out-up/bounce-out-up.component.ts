import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceOutUp } from '../../animations/bounce-out-up.animation';

@Component({
  selector: 'ng2animate-bounce-out-up',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-out-up.component.html',
  animations: [ bounceOutUp ]
})
export class BounceOutUpComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
