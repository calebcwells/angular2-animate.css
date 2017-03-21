import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomOutLeft } from '../../animations/zoom-out-left.animation';

@Component({
  selector: 'ng2animate-zoom-out-left',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-out-left.component.html',
  animations: [ zoomOutLeft ]
})
export class ZoomOutLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
