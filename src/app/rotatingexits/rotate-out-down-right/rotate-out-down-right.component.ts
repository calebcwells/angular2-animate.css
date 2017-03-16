import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateOutDownRight } from '../../animations/rotate-out-down-right.animation';

@Component({
  selector: 'ng2animate-rotate-out-down-right',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-out-down-right.component.html',
  animations: [ rotateOutDownRight ]
})
export class RotateOutDownRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
