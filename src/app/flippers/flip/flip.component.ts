import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { flip } from '../../animations/flip.animation';

@Component({
  selector: 'ng2animate-flip',
  host: { 'class': 'boxes' },
  templateUrl: './flip.component.html',
  animations: [ flip ]
})
export class FlipComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
