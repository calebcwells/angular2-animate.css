import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { lightSpeedIn } from '../../animations/light-speed-in.animation';

@Component({
  selector: 'ng2animate-light-speed-in',
  host: { 'class': 'boxes' },
  templateUrl: './light-speed-in.component.html',
  animations: [ lightSpeedIn ]
})
export class LightSpeedInComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
