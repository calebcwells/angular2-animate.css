import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { flipOutX } from '../../animations/flip-out-x.animation';

@Component({
  selector: 'ng2animate-flip-out-x',
  host: { 'class': 'boxes' },
  templateUrl: './flip-out-x.component.html',
  animations: [ flipOutX ]
})
export class FlipOutXComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
