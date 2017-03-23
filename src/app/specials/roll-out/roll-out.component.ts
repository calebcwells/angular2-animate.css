import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rollOut } from '../../animations/roll-out.animation';

@Component({
  selector: 'ng2animate-roll-out',
  host: { 'class': 'boxes' },
  templateUrl: './roll-out.component.html',
  animations: [ rollOut ]
})
export class RollOutComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
