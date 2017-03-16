import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateInDownRight } from '../../animations/rotate-in-down-right.animation';

@Component({
  selector: 'ng2animate-rotate-in-down-right',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-in-down-right.component.html',
  animations: [ rotateInDownRight ]
})
export class RotateInDownRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
