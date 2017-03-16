import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateOutDownLeft } from '../../animations/rotate-out-down-left.animation';

@Component({
  selector: 'ng2animate-rotate-out-down-left',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-out-down-left.component.html',
  animations: [ rotateOutDownLeft ]
})
export class RotateOutDownLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
