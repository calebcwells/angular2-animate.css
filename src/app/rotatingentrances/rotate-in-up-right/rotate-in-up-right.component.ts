import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateInUpRight } from '../../animations/rotate-in-up-right.animation';

@Component({
  selector: 'ng2animate-rotate-in-up-right',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-in-up-right.component.html',
  animations: [ rotateInUpRight ]
})
export class RotateInUpRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
