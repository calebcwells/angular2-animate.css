import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomOutDown } from '../../animations/zoom-out-down.animation';

@Component({
  selector: 'ng2animate-zoom-out-down',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-out-down.component.html',
  animations: [ zoomOutDown ]
})
export class ZoomOutDownComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
