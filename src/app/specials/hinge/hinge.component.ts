import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { hinge } from '../../animations/hinge.animation';

@Component({
  selector: 'ng2animate-hinge',
  host: { 'class': 'boxes' },
  templateUrl: './hinge.component.html',
  animations: [ hinge ]
})
export class HingeComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
