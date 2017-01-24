import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { shake } from '../../animations/shake.animation';

@Component({
  selector: 'ng2animate-shake',
  host: { 'class': 'boxes' },
  templateUrl: './shake.component.html',
  animations: [ shake ]
})
export class ShakeComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
