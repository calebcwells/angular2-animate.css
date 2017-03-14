import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { flipInY } from '../../animations/flip-in-y.animation';

@Component({
  selector: 'ng2animate-flip-in-y',
  host: { 'class': 'boxes' },
  templateUrl: './flip-in-y.component.html',
  animations: [ flipInY ]
})
export class FlipInYComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
