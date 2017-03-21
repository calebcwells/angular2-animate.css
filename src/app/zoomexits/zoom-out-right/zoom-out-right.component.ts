import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomOutRight } from '../../animations/zoom-out-right.animation';

@Component({
  selector: 'ng2animate-zoom-out-right',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-out-right.component.html',
  animations: [ zoomOutRight ]
})
export class ZoomOutRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
