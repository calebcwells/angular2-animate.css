import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateInUpLeft } from '../../animations/rotate-in-up-left.animation';

@Component({
  selector: 'ng2animate-rotate-in-up-left',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-in-up-left.component.html',
  animations: [ rotateInUpLeft ]
})
export class RotateInUpLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
