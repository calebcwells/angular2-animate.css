import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateInDownLeft } from '../../animations/rotate-in-down-left.animation';

@Component({
  selector: 'ng2animate-rotate-in-down-left',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-in-down-left.component.html',
  animations: [ rotateInDownLeft ]
})
export class RotateInDownLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
