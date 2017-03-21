import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomOut } from '../../animations/zoom-out.animation';

@Component({
  selector: 'ng2animate-zoom-out',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-out.component.html',
  animations: [ zoomOut ]
})
export class ZoomOutComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
