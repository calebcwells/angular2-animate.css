import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomInLeft } from '../../animations/zoom-in-left.animation';

@Component({
  selector: 'ng2animate-zoom-in-left',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-in-left.component.html',
  animations: [ zoomInLeft ]
})
export class ZoomInLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
