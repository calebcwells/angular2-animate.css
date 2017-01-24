import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { pulse } from '../../animations/pulse.animation';

@Component({
  selector: 'ng2animate-pulse',
  host: { 'class': 'boxes' },
  templateUrl: './pulse.component.html',
  animations: [ pulse ]
})
export class PulseComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
