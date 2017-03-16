import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateOut } from '../../animations/rotate-out.animation';

@Component({
  selector: 'ng2animate-rotate-out',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-out.component.html',
  animations: [ rotateOut ]
})
export class RotateOutComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
