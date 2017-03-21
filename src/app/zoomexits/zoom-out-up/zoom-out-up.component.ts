import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomOutUp } from '../../animations/zoom-out-up.animation';

@Component({
  selector: 'ng2animate-zoom-out-up',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-out-up.component.html',
  animations: [ zoomOutUp ]
})
export class ZoomOutUpComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
