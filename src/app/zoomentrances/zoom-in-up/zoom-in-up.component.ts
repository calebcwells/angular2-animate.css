import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomInUp } from '../../animations/zoom-in-up.animation';

@Component({
  selector: 'ng2animate-zoom-in-up',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-in-up.component.html',
  animations: [ zoomInUp ]
})
export class ZoomInUpComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
