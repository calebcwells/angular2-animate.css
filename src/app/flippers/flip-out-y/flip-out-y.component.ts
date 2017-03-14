import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { flipOutY } from '../../animations/flip-out-y.animation';

@Component({
  selector: 'ng2animate-flip-out-y',
  host: { 'class': 'boxes' },
  templateUrl: './flip-out-y.component.html',
  animations: [ flipOutY ]
})
export class FlipOutYComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
