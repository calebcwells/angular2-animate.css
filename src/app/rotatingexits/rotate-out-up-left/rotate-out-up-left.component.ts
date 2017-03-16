import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateOutUpLeft } from '../../animations/rotate-out-up-left.animation';

@Component({
  selector: 'ng2animate-rotate-out-up-left',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-out-up-left.component.html',
  animations: [ rotateOutUpLeft ]
})
export class RotateOutUpLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
