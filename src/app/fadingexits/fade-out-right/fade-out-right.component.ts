import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutRight } from '../../animations/fade-out-right.animation';

@Component({
  selector: 'ng2animate-fade-out-right',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-right.component.html',
  animations: [ fadeOutRight ]
})
export class FadeOutRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
