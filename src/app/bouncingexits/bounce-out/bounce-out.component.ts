import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceOut } from '../../animations/bounce-out.animation';

@Component({
  selector: 'ng2animate-bounce-out',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-out.component.html',
  animations: [ bounceOut ]
})
export class BounceOutComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
