import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { zoomIn } from '../../animations/zoom-in.animation';

@Component({
  selector: 'ng2animate-zoom-in',
  host: { 'class': 'boxes' },
  templateUrl: './zoom-in.component.html',
  animations: [ zoomIn ]
})
export class ZoomInComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
