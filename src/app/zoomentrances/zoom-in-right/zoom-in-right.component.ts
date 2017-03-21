import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomInRight } from '../../animations/zoom-in-right.animation';

@Component({
  selector: 'ng2animate-zoom-in-right',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-in-right.component.html',
  animations: [ zoomInRight ]
})
export class ZoomInRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
