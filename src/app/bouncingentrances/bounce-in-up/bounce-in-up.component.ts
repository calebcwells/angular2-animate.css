import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceInUp } from '../../animations/bounce-in-up.animation';

@Component({
  selector: 'ng2animate-bounce-in-up',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-in-up.component.html',
  animations: [ bounceInUp ]
})
export class BounceInUpComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
