import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { wobble } from '../../animations/wobble.animation';

@Component({
  selector: 'ng2animate-wobble',
  host: { 'class': 'boxes' },
  templateUrl: './wobble.component.html',
  animations: [ wobble ]
})
export class WobbleComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
