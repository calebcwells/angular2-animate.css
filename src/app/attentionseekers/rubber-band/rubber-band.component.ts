import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rubberBand } from '../../animations/rubber-band.animation';

@Component({
  selector: 'ng2animate-rubber-band',
  host: { 'class': 'boxes' },
  templateUrl: './rubber-band.component.html',
  animations: [ rubberBand ]
})
export class RubberBandComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
