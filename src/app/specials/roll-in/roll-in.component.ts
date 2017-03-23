import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rollIn } from '../../animations/roll-in.animation';

@Component({
  selector: 'ng2animate-roll-in',
  host: { 'class': 'boxes' },
  templateUrl: './roll-in.component.html',
  animations: [ rollIn ]
})
export class RollInComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
