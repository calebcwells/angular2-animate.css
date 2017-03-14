import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { flipInX } from '../../animations/flip-in-x.animation';

@Component({
  selector: 'ng2animate-flip-in-x',
  host: { 'class': 'boxes' },
  templateUrl: './flip-in-x.component.html',
  animations: [ flipInX ]
})
export class FlipInXComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
