import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateOutUpRight } from '../../animations/rotate-out-up-right.animation';

@Component({
  selector: 'ng2animate-rotate-out-up-right',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-out-up-right.component.html',
  animations: [ rotateOutUpRight ]
})
export class RotateOutUpRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
