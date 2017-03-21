import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomInDown } from '../../animations/zoom-in-down.animation';

@Component({
  selector: 'ng2animate-zoom-in-down',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-in-down.component.html',
  animations: [ zoomInDown ]
})
export class ZoomInDownComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
