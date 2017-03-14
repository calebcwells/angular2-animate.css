import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { lightSpeedOut } from '../../animations/light-speed-out.animation';

@Component({
  selector: 'ng2animate-light-speed-out',
  host: { 'class': 'boxes' },
  templateUrl: './light-speed-out.component.html',
  animations: [ lightSpeedOut ]
})
export class LightSpeedOutComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
